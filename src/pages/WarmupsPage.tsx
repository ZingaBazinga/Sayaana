import { useState, type FormEvent } from "react";
import {
    canonicalPhrase,
    isPhraseCorrect,
    sectionTaskCount,
    warmupSections,
    type BlanksTask,
    type ChoiceTask,
    type PhraseTask,
    type WarmupSection,
} from "../data/warmups";

type ChoiceAnswer = {
    type: "choice";
    value: string;
};

type PhraseAnswer = {
    type: "phrase";
    value: string;
};

type BlanksAnswer = {
    type: "blanks";
    values: [string, string];
};

type StoredAnswer = ChoiceAnswer | PhraseAnswer | BlanksAnswer;

function capitalize(word: string): string {
    if (!word) {
        return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function ChoiceCard({
    task,
    selected,
    onSelect,
}: {
    task: ChoiceTask;
    selected: string | undefined;
    onSelect: (option: string) => void;
}) {
    const isAnswered = selected !== undefined;
    const isCorrect = selected === task.answer;

    return (
        <article className="warmup-card">
            <h3>{task.title}</h3>
            <p className="warmup-question">{task.question}</p>
            <div className="warmup-options">
                {task.options.map((option) => {
                    const isSelected = selected === option;
                    const showCorrect = isAnswered && option === task.answer;
                    const showWrong = isAnswered && isSelected && !isCorrect;

                    return (
                        <button
                            key={option}
                            type="button"
                            className={`warmup-option ${showCorrect ? "correct" : ""} ${showWrong ? "wrong" : ""}`}
                            onClick={() => onSelect(option)}
                            disabled={isAnswered}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
            {isAnswered && (
                <p
                    className={`warmup-result ${isCorrect ? "correct-result" : "wrong-result"}`}
                >
                    {isCorrect
                        ? "Верно!"
                        : `Неверно. Правильный ответ: ${task.answer}`}
                    {task.explanation && (
                        <span className="warmup-explanation">
                            {task.explanation}
                        </span>
                    )}
                </p>
            )}
        </article>
    );
}

function PhraseCard({
    task,
    answer,
    error,
    draft,
    onDraftChange,
    onSubmit,
}: {
    task: PhraseTask;
    answer: string | undefined;
    error: string | undefined;
    draft: string;
    onDraftChange: (value: string) => void;
    onSubmit: (value: string) => void;
}) {
    const isAnswered = answer !== undefined;
    const isCorrect =
        answer !== undefined &&
        isPhraseCorrect(answer, task.noun, task.adjective);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit(draft);
    };

    return (
        <article className="warmup-card">
            <h3>
                {capitalize(task.noun)} ({task.question}?)
            </h3>
            <p className="warmup-question">
                Запишите словосочетание со словом{" "}
                <span className="warmup-given">{task.adjective}</span>
            </p>
            <form className="warmup-form" onSubmit={handleSubmit}>
                <input
                    className="warmup-input"
                    type="text"
                    name={task.id}
                    value={isAnswered ? answer : draft}
                    onChange={(event) => onDraftChange(event.target.value)}
                    placeholder="Введите словосочетание"
                    disabled={isAnswered}
                    aria-label={`Словосочетание: ${task.noun}`}
                    autoComplete="off"
                />
                <button className="warmup-check" type="submit" disabled={isAnswered}>
                    Проверить
                </button>
            </form>
            {error && !isAnswered && (
                <p className="warmup-result wrong-result">{error}</p>
            )}
            {isAnswered && (
                <p
                    className={`warmup-result ${isCorrect ? "correct-result" : "wrong-result"}`}
                >
                    {isCorrect
                        ? "Верно!"
                        : `Неверно. Правильный ответ: ${canonicalPhrase(task.noun, task.adjective)}`}
                </p>
            )}
        </article>
    );
}

function BlankGroup({
    label,
    options,
    selected,
    answer,
    locked,
    onSelect,
}: {
    label: string;
    options: [string, string];
    selected: string | null;
    answer: string;
    locked: boolean;
    onSelect: (option: string) => void;
}) {
    return (
        <div className="warmup-blank">
            <p className="warmup-blank-label">{label}</p>
            <div className="warmup-options">
                {options.map((option) => {
                    const isSelected = selected === option;
                    const showCorrect = locked && option === answer;
                    const showWrong = locked && isSelected && option !== answer;

                    return (
                        <button
                            key={option}
                            type="button"
                            className={`warmup-option ${showCorrect ? "correct" : ""} ${showWrong ? "wrong" : ""}`}
                            onClick={() => onSelect(option)}
                            disabled={locked}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

function BlanksCard({
    task,
    values,
    onSelect,
}: {
    task: BlanksTask;
    values: [string | null, string | null];
    onSelect: (index: 0 | 1, option: string) => void;
}) {
    const locked = values[0] !== null && values[1] !== null;
    const isCorrect =
        locked &&
        values[0] === task.first.answer &&
        values[1] === task.second.answer;

    return (
        <article className="warmup-card">
            <h3>{task.title}</h3>
            <p className="warmup-question">
                {task.before} ___ {task.middle} ___ {task.after}
            </p>
            <BlankGroup
                label="Первый пропуск"
                options={task.first.options}
                selected={values[0]}
                answer={task.first.answer}
                locked={locked}
                onSelect={(option) => onSelect(0, option)}
            />
            <BlankGroup
                label="Второй пропуск"
                options={task.second.options}
                selected={values[1]}
                answer={task.second.answer}
                locked={locked}
                onSelect={(option) => onSelect(1, option)}
            />
            {locked && (
                <p
                    className={`warmup-result ${isCorrect ? "correct-result" : "wrong-result"}`}
                >
                    {isCorrect
                        ? "Верно!"
                        : `Неверно. Правильный ответ: ${task.first.answer}, ${task.second.answer}`}
                    <span className="warmup-explanation">{task.explanation}</span>
                </p>
            )}
        </article>
    );
}

function isSectionAnswered(
    section: WarmupSection,
    answers: Record<string, StoredAnswer>,
): number {
    return (
        section.choices.filter((task) => answers[task.id]?.type === "choice")
            .length +
        section.phrases.filter((task) => answers[task.id]?.type === "phrase")
            .length +
        section.blanks.filter((task) => answers[task.id]?.type === "blanks")
            .length
    );
}

export default function WarmupsPage() {
    const [activeSectionId, setActiveSectionId] = useState(
        warmupSections[0].id,
    );
    const [answers, setAnswers] = useState<Record<string, StoredAnswer>>({});
    const [drafts, setDrafts] = useState<Record<string, string>>({});
    const [phraseErrors, setPhraseErrors] = useState<Record<string, string>>(
        {},
    );
    const [blankDrafts, setBlankDrafts] = useState<
        Record<string, [string | null, string | null]>
    >({});

    const activeSection =
        warmupSections.find((section) => section.id === activeSectionId) ??
        warmupSections[0];
    const answeredCount = isSectionAnswered(activeSection, answers);

    const selectChoice = (id: string, option: string) => {
        setAnswers((current) => {
            if (current[id]) {
                return current;
            }
            return { ...current, [id]: { type: "choice", value: option } };
        });
    };

    const submitPhrase = (task: PhraseTask, value: string) => {
        if (!value.trim()) {
            setPhraseErrors((current) => ({
                ...current,
                [task.id]: "Введите словосочетание.",
            }));
            return;
        }

        setPhraseErrors((current) => {
            const next = { ...current };
            delete next[task.id];
            return next;
        });
        setAnswers((current) => {
            if (current[task.id]) {
                return current;
            }
            return {
                ...current,
                [task.id]: { type: "phrase", value: value.trim() },
            };
        });
    };

    const selectBlank = (task: BlanksTask, index: 0 | 1, option: string) => {
        if (answers[task.id]) {
            return;
        }

        const previous = blankDrafts[task.id] ?? [null, null];
        const nextValues: [string | null, string | null] = [
            previous[0],
            previous[1],
        ];
        nextValues[index] = option;
        setBlankDrafts((current) => ({ ...current, [task.id]: nextValues }));

        if (nextValues[0] && nextValues[1]) {
            const committed: [string, string] = [nextValues[0], nextValues[1]];
            setAnswers((stored) => {
                if (stored[task.id]) {
                    return stored;
                }
                return {
                    ...stored,
                    [task.id]: { type: "blanks", values: committed },
                };
            });
        }
    };

    return (
        <div className="warmups-page">
            <section className="warmups-header">
                <p className="warmups-kicker">Вкусные разминки</p>
                <h2>Проверьте свою грамотность</h2>
                <p>
                    Задания о согласовании, написании -тся/-ться и Н/НН в
                    словах о еде.
                </p>
            </section>

            <div className="warmup-tabs" role="tablist">
                {warmupSections.map((section) => (
                    <button
                        key={section.id}
                        type="button"
                        role="tab"
                        aria-selected={section.id === activeSection.id}
                        className={`warmup-tab ${section.id === activeSection.id ? "active" : ""}`}
                        onClick={() => setActiveSectionId(section.id)}
                    >
                        {section.title}
                    </button>
                ))}
            </div>

            <p className="warmup-section-note">{activeSection.description}</p>

            <div className="warmups-progress">
                Выполнено: <strong>{answeredCount}</strong> из{" "}
                {sectionTaskCount(activeSection)}
            </div>

            <div className="warmups-list">
                {activeSection.choices.map((task) => {
                    const stored = answers[task.id];
                    const selected =
                        stored?.type === "choice" ? stored.value : undefined;
                    return (
                        <ChoiceCard
                            key={task.id}
                            task={task}
                            selected={selected}
                            onSelect={(option) => selectChoice(task.id, option)}
                        />
                    );
                })}
                {activeSection.phrases.map((task) => {
                    const stored = answers[task.id];
                    const answer =
                        stored?.type === "phrase" ? stored.value : undefined;
                    return (
                        <PhraseCard
                            key={task.id}
                            task={task}
                            answer={answer}
                            error={phraseErrors[task.id]}
                            draft={drafts[task.id] ?? ""}
                            onDraftChange={(value) =>
                                setDrafts((current) => ({
                                    ...current,
                                    [task.id]: value,
                                }))
                            }
                            onSubmit={(value) => submitPhrase(task, value)}
                        />
                    );
                })}
                {activeSection.blanks.map((task) => {
                    const stored = answers[task.id];
                    const values: [string | null, string | null] =
                        stored?.type === "blanks"
                            ? stored.values
                            : (blankDrafts[task.id] ?? [null, null]);
                    return (
                        <BlanksCard
                            key={task.id}
                            task={task}
                            values={values}
                            onSelect={(index, option) =>
                                selectBlank(task, index, option)
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
}
