const assessments = [
  {
    group: "formative",
    name: "Bài tập nhóm tại lớp [1]",
    method: "Group",
    week: "1",
    weight: 5,
  },
  {
    group: "formative",
    name: "Thảo luận diễn đàn [1]",
    method: "Individual",
    week: "2",
    weight: 2,
  },
  {
    group: "formative",
    name: "Bài tập nhóm tại lớp [2]",
    method: "Group",
    week: "3",
    weight: 5,
  },
  {
    group: "formative",
    name: "Trắc nghiệm cá nhân [1]",
    method: "Individual",
    week: "4",
    weight: 5,
  },
  {
    group: "formative",
    name: "Thảo luận diễn đàn [2]",
    method: "Group",
    week: "5",
    weight: 2,
  },
  {
    group: "formative",
    name: "Trắc nghiệm cá nhân [2]",
    method: "Individual",
    week: "8",
    weight: 5,
  },
  {
    group: "formative",
    name: "Thuyết trình nhóm cuối kỳ và đánh giá chéo",
    method: "Group + Individual",
    week: "9",
    weight: 6,
  },
  {
    group: "midterm",
    name: "Đánh giá giữa kỳ",
    method: "Individual",
    week: "6",
    weight: 20,
  },
  {
    group: "final",
    name: "Đánh giá cuối kỳ",
    method: "Individual",
    week: "Cuối học kỳ",
    weight: 50,
  },
];

const groupMeta = {
  formative: {
    listId: "formativeList",
    scoreId: "formativeScore",
    barId: "barFormative",
    barTextId: "barFormativeText",
    maxContribution: 3,
  },
  midterm: {
    listId: "midtermList",
    scoreId: "midtermScore",
    barId: "barMidterm",
    barTextId: "barMidtermText",
    maxContribution: 2,
  },
  final: {
    listId: "finalList",
    scoreId: "finalExamScore",
    barId: "barFinal",
    barTextId: "barFinalText",
    maxContribution: 5,
  },
};

const form = document.querySelector("#gradeForm");
const targetScore = document.querySelector("#targetScore");
const targetValue = document.querySelector("#targetValue");
const resetButton = document.querySelector("#resetButton");

function normalizeNumber(value) {
  const normalized = String(value).replace(",", ".");
  const number = Number.parseFloat(normalized);
  return Number.isFinite(number) ? Math.min(Math.max(number, 0), 10) : 0;
}
