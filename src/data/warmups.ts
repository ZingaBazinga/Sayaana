export type ChoiceTask = {
    id: string;
    title: string;
    question: string;
    options: string[];
    answer: string;
    explanation?: string;
};

export type PhraseTask = {
    id: string;
    noun: string;
    adjective: string;
    question: string;
};

export type BlankChoice = {
    options: [string, string];
    answer: string;
};

export type BlanksTask = {
    id: string;
    title: string;
    before: string;
    first: BlankChoice;
    middle: string;
    second: BlankChoice;
    after: string;
    explanation: string;
};

export type WarmupSection = {
    id: string;
    title: string;
    description: string;
    choices: ChoiceTask[];
    phrases: PhraseTask[];
    blanks: BlanksTask[];
};

const spelling: ChoiceTask[] = [
    {
        id: "spell-1",
        title: "Сушить или сушёные?",
        question:
            "Выберите верное написание глагола в инструкции: «Грибы нужно ___ на солнце».",
        options: ["сушить", "сушіть", "сушыть"],
        answer: "сушить",
    },
    {
        id: "spell-2",
        title: "Жарить или жаренная?",
        question:
            "Выберите верное написание причастия: «___ на масле картошка была вкусной».",
        options: ["жаренная", "жареная", "жарённая"],
        answer: "жареная",
    },
    {
        id: "spell-3",
        title: "Солёные грибы",
        question: "Какая буква пропущена в слове «сол__ные грибы»?",
        options: ["ё", "е"],
        answer: "ё",
    },
];

const agreementPairs: Array<[string, string, string]> = [
    ["йогурт", "черничный", "какой"],
    ["мороженое", "ягодное", "какое"],
    ["кекс", "шоколадный", "какой"],
    ["какао", "вкусное", "какое"],
    ["баранки", "ванильные", "какие"],
    ["сырок", "глазированный", "какой"],
    ["рулет", "маковый", "какой"],
    ["шоколад", "белый", "какой"],
    ["крендель", "сахарный", "какой"],
    ["зефир", "воздушный", "какой"],
    ["печенье", "миндальное", "какое"],
    ["конфеты", "шоколадные", "какие"],
    ["запеканка", "творожная", "какая"],
    ["бублик", "заварной", "какой"],
    ["карамель", "солёная", "какая"],
    ["панкейки", "классические", "какие"],
    ["салат", "фруктовый", "какой"],
    ["манго", "спелое", "какое"],
    ["сок", "ананасовый", "какой"],
    ["виноград", "кислый", "какой"],
    ["киви", "полезное", "какое"],
];

const agreement: PhraseTask[] = agreementPairs.map(
    ([noun, adjective, question], index) => ({
        id: `agreement-${index + 1}`,
        noun,
        adjective,
        question,
    }),
);

const tsyaRule =
    "Спросите: «что делать?» или «что сделать?» — пишется -ться. «Что делает?» или «что сделает?» — пишется -тся.";

const tsya: ChoiceTask[] = [
    {
        id: "tsya-1",
        title: "Яблочный пирог",
        question: "В духовке сейчас ___ яблочный пирог.",
        options: ["печётся", "печёться"],
        answer: "печётся",
        explanation: tsyaRule,
    },
    {
        id: "tsya-2",
        title: "Кекс черствеет",
        question:
            "Если кекс долго лежит, он начинает черстветь и ___.",
        options: ["крошится", "крошиться"],
        answer: "крошиться",
        explanation: tsyaRule,
    },
    {
        id: "tsya-3",
        title: "Горячий суп",
        question: "После долгого дня хочется ___ горячим супом и хлебом.",
        options: ["насытится", "насытиться"],
        answer: "насытиться",
        explanation: tsyaRule,
    },
    {
        id: "tsya-4",
        title: "Макароны",
        question: "Макароны должны ___ через семь минут.",
        options: ["сварится", "свариться"],
        answer: "свариться",
        explanation: tsyaRule,
    },
    {
        id: "tsya-5",
        title: "Картофель",
        question: "Картофель ___ при 180–220 °C в течение 30–50 минут.",
        options: ["запекается", "запекаеться"],
        answer: "запекается",
        explanation: tsyaRule,
    },
    {
        id: "tsya-6",
        title: "Яйца всмятку",
        question: "Яйца должны ___ всмятку за три минуты.",
        options: ["сварится", "свариться"],
        answer: "свариться",
        explanation: tsyaRule,
    },
    {
        id: "tsya-7",
        title: "Молоко",
        question: "Молоко может ___, если оставить его на столе на ночь.",
        options: ["испортится", "испортиться"],
        answer: "испортиться",
        explanation: tsyaRule,
    },
    {
        id: "tsya-8",
        title: "Сыр на сковороде",
        question: "Сыр может ___ на горячей сковороде.",
        options: ["расплавится", "расплавиться"],
        answer: "расплавиться",
        explanation: tsyaRule,
    },
    {
        id: "tsya-9",
        title: "Второе блюдо",
        question: "Второе уже ___ на плите.",
        options: ["подогревается", "подогреваться"],
        answer: "подогревается",
        explanation: tsyaRule,
    },
];

const borscht: BlanksTask = {
    id: "tsya-10",
    title: "Борщ",
    before: "Борщ",
    first: {
        options: ["настаивается", "настаиваться"],
        answer: "настаивается",
    },
    middle: "под крышкой и",
    second: {
        options: ["становится", "становиться"],
        answer: "становится",
    },
    after: "наваристее.",
    explanation: tsyaRule,
};

const nn: ChoiceTask[] = [
    {
        id: "nn-1",
        title: "Нарезанное авокадо",
        question: "Какие буквы пропущены: «нареза_ое авокадо»?",
        options: ["н", "нн"],
        answer: "нн",
        explanation:
            "Нарезанное — полное страдательное причастие прошедшего времени совершенного вида, поэтому пишется НН.",
    },
    {
        id: "nn-2",
        title: "Льняное семя",
        question: "Какие буквы пропущены: «льня_ое семя»?",
        options: ["н", "нн"],
        answer: "н",
        explanation:
            "Льняное — прилагательное с суффиксом -ян-. В суффиксах -ан-, -ян-, -ин- пишется одна Н.",
    },
    {
        id: "nn-3",
        title: "Ржаной хлеб",
        question: "Какие буквы пропущены: «ржа_ой хлеб»?",
        options: ["н", "нн"],
        answer: "н",
        explanation:
            "Ржаной — прилагательное, образованное от существительного с помощью суффикса -ан-. Пишется одна Н.",
    },
    {
        id: "nn-4",
        title: "Поданный горячим",
        question: "Какие буквы пропущены: «пода_ый горячим»?",
        options: ["н", "нн"],
        answer: "нн",
        explanation:
            "Поданный — полное страдательное причастие прошедшего времени совершенного вида, поэтому пишется НН.",
    },
    {
        id: "nn-5",
        title: "Поджаренный тост",
        question: "Какие буквы пропущены: «поджаре_ый тост»?",
        options: ["н", "нн"],
        answer: "нн",
        explanation:
            "Поджаренный — полное страдательное причастие прошедшего времени совершенного вида, поэтому пишется НН.",
    },
];

export const warmupSections: WarmupSection[] = [
    {
        id: "spelling",
        title: "Написание слов",
        description:
            "Небольшие задания о том, как правильно писать названия кулинарных действий и продуктов.",
        choices: spelling,
        phrases: [],
        blanks: [],
    },
    {
        id: "agreement",
        title: "Согласование",
        description:
            "Запишите словосочетание на основе согласования: прилагательное стоит в том же роде, числе и падеже, что и существительное.",
        choices: [],
        phrases: agreement,
        blanks: [],
    },
    {
        id: "tsya",
        title: "-тся / -ться",
        description:
            "Выберите верное написание. Если к глаголу подходит вопрос «что делать?» или «что сделать?», пишется -ться. Если «что делает?» или «что сделает?» — -тся.",
        choices: tsya,
        phrases: [],
        blanks: [borscht],
    },
    {
        id: "nn",
        title: "-н- / -нн-",
        description:
            "Задание 6 ОГЭ: вставьте Н или НН в прилагательных и причастиях.",
        choices: nn,
        phrases: [],
        blanks: [],
    },
];

export function sectionTaskCount(section: WarmupSection): number {
    return (
        section.choices.length + section.phrases.length + section.blanks.length
    );
}

export function normalizeAnswer(value: string): string {
    return value
        .trim()
        .toLowerCase()
        .replace(/ё/g, "е")
        .replace(/[«»"'.,!?—–-]/g, "")
        .replace(/\s+/g, " ");
}

export function isPhraseCorrect(
    input: string,
    noun: string,
    adjective: string,
): boolean {
    const value = normalizeAnswer(input);
    if (!value) {
        return false;
    }

    const normalizedNoun = normalizeAnswer(noun);
    const normalizedAdjective = normalizeAnswer(adjective);
    return (
        value === `${normalizedAdjective} ${normalizedNoun}` ||
        value === `${normalizedNoun} ${normalizedAdjective}`
    );
}

export function canonicalPhrase(noun: string, adjective: string): string {
    return `${adjective.toLowerCase()} ${noun.toLowerCase()}`;
}
