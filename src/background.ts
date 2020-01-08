const comments = "Comments";

const topics: string[] = [
  "Comment Sentences",
  "Contexts",
  "Copying",
  "Crypto Rand",
  "Declaring Empty Slices",
  "Doc Comments",
  "Don't Panic",
  "Error Strings",
  "Examples",
  "Goroutine Lifetimes",
  "Handle Errors",
  "Imports",
  "Import Blank",
  "Import Dot",
  "In-Band Errors",
  "Indent Error Flow",
  "Initialisms",
  "Line Length",
  "Interfaces",
  "Mixed Caps",
  "Named Result Parameters",
  "Naked Returns",
  "Package Comments",
  "Package Names",
  "Pass Values",
  "Receiver Names",
  "Receiver Type",
  "Synchronous Functions",
  "Useful Test Failures",
  "Variable Names",
];

const testComments = "Test Comments";

const testTopics: string[] = [
  "Assert Libraries",
  "Choose Human-Readable Subtest Names",
  "Compare Full Structures",
  "Compare Stable Results",
  "Equality Comparison and Diffs",
  "Got before Want",
  "Identify the Function",
  "Identify the Input",
  "Keep Going",
  "Mark Test Helpers",
  "Print Diffs",
  "Table-Driven Tests vs Multiple Test Functions",
  "Test Error Semantics",
];

function create(id: string, parentId?: string): void {
  chrome.contextMenus.create({
    contexts: ["editable"],
    id: `${id}`,
    parentId: `${parentId}`,
    title: `${id}`,
  });
}

function urlify(t: string, p: string): string {
  const fragment = t.toLowerCase().replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "");

  switch (p) {
    case comments:
      return "https://github.com/golang/go/wiki/CodeReviewComments#" + fragment;
    case testComments:
      return "https://github.com/golang/go/wiki/TestComments#" + fragment;
    default:
      return String.raw`¯\_(ツ)_/¯`;
  }
}

for (const id of [comments, testComments]) {
  chrome.contextMenus.create({
    contexts: ["editable"],
    id: `${id}`,
    title: `${id}`,
  });
}

for (const topic of topics) {
  create(topic, comments);
}

for (const topic of testTopics) {
  create(topic, testComments);
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (tab?.id === undefined) {
    return;
  }

  chrome.tabs.executeScript(tab.id, {
    code: `e = document.activeElement;
v = e.value;
e.value = v.substring(0, e.selectionStart) +
  "${urlify(info.menuItemId, info.parentMenuItemId)}" +
  v.substring(e.selectionStart);
`});
});
