import receiptProcessingServiceImg from "../../assets/images/ReceiptProcessingServiceImg.jpg";

export const blogPosts = [
  {
    slug: "designing-a-receipt-processing-service-in-java",
    category: "Architecture",
    title: "Designing a Receipt Processing Service in Java",
    excerpt:
      "From file upload to structured data: a practical look at treating receipt handling as a pipeline instead of a single function.",
    author: "Alex Bukhtiyarov",
    publishedAt: "April 29, 2026",
    readTime: "6 min read",
    coverImage: receiptProcessingServiceImg,
    sections: [
      {
        type: "paragraph",
        content: "From file upload to structured data",
      },
      {
        type: "heading",
        level: 2,
        content: "Problem",
      },
      {
        type: "paragraph",
        content:
          "In one of my projects, I needed to process receipts uploaded by users and extract structured information such as items, totals, and metadata.",
      },
      {
        type: "paragraph",
        content: "At first glance, it looks simple: upload, parse, save.",
      },
      {
        type: "paragraph",
        content: "In reality, it quickly becomes more complex:",
      },
      {
        type: "list",
        items: [
          "files come in different formats such as images and PDFs",
          "data is inconsistent",
          "parsing can fail",
          "processing may take time",
        ],
      },
      {
        type: "paragraph",
        content: "This is not just a function. It is a small system.",
      },
      {
        type: "heading",
        level: 2,
        content: "Why It Matters",
      },
      {
        type: "paragraph",
        content:
          "If designed poorly, this kind of feature leads to fragile parsing logic, tight coupling between components, weak error handling, and difficulty scaling or debugging.",
      },
      {
        type: "paragraph",
        content: "In production, failures are not rare. They are expected.",
      },
      {
        type: "heading",
        level: 2,
        content: "Approach",
      },
      {
        type: "paragraph",
        content:
          "I approached the problem as a pipeline rather than a single operation:",
      },
      {
        type: "code",
        language: "text",
        content:
          "Upload -> Validation -> Processing -> Extraction -> Persistence",
      },
      {
        type: "paragraph",
        content: "Each step has a clear responsibility.",
      },
      {
        type: "heading",
        level: 3,
        content: "1. Upload Layer",
      },
      {
        type: "paragraph",
        content: "Handles file input and basic checks:",
      },
      {
        type: "list",
        items: [
          "file type validation",
          "size limits",
          "storage in temporary or cloud-backed locations",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: "2. Validation",
      },
      {
        type: "paragraph",
        content:
          "Ensures the file is processable before heavy work begins.",
      },
      {
        type: "heading",
        level: 3,
        content: "3. Processing",
      },
      {
        type: "paragraph",
        content: "Prepares the file:",
      },
      {
        type: "list",
        items: [
          "image normalization",
          "format conversion when needed",
        ],
      },
      {
        type: "paragraph",
        content:
          "This step isolates technical concerns from business logic.",
      },
      {
        type: "heading",
        level: 3,
        content: "4. Extraction",
      },
      {
        type: "paragraph",
        content: "Core logic:",
      },
      {
        type: "list",
        items: [
          "parsing receipt content",
          "mapping raw data into a structured model",
        ],
      },
      {
        type: "paragraph",
        content:
          "This layer should be independent and testable.",
      },
      {
        type: "heading",
        level: 3,
        content: "5. Persistence",
      },
      {
        type: "paragraph",
        content: "Stores results:",
      },
      {
        type: "list",
        items: [
          "raw data when needed",
          "structured entities for further use",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Key Design Decisions",
      },
      {
        type: "heading",
        level: 3,
        content: "Separation of Concerns",
      },
      {
        type: "paragraph",
        content:
          "Each stage is isolated. This keeps the system maintainable and easier to debug.",
      },
      {
        type: "heading",
        level: 3,
        content: "Failure Handling",
      },
      {
        type: "paragraph",
        content: "Failures are expected:",
      },
      {
        type: "list",
        items: [
          "invalid files",
          "parsing errors",
          "partial data",
        ],
      },
      {
        type: "paragraph",
        content:
          "Instead of breaking the flow, the system should log the issue, return meaningful feedback, and allow retries where possible.",
      },
      {
        type: "heading",
        level: 3,
        content: "Observability",
      },
      {
        type: "paragraph",
        content:
          "Processing pipelines are hard to debug without visibility. I prefer adding structured logs and status tracking such as processing, failed, and completed.",
      },
      {
        type: "heading",
        level: 2,
        content: "Example",
      },
      {
        type: "code",
        language: "java",
        content: `public void processReceipt(File file) {
    validate(file);

    ProcessedFile processed = fileProcessor.prepare(file);
    ReceiptData data = extractor.extract(processed);

    repository.save(data);
}`,
      },
      {
        type: "paragraph",
        content:
          "In a real system, each of these steps would be isolated services.",
      },
      {
        type: "heading",
        level: 2,
        content: "Scaling Considerations",
      },
      {
        type: "paragraph",
        content:
          "As usage grows, this design allows moving processing to asynchronous jobs, introducing queues, and parallelizing extraction without rewriting the whole system.",
      },
      {
        type: "heading",
        level: 2,
        content: "Takeaway",
      },
      {
        type: "paragraph",
        content:
          "Even simple features like file uploads can hide system-level complexity.",
      },
      {
        type: "paragraph",
        content:
          "Treating them as pipelines instead of single functions helps improve reliability, simplify debugging, and prepare for scale.",
      },
      {
        type: "heading",
        level: 2,
        content: "Final Thought",
      },
      {
        type: "paragraph",
        content:
          "I try to approach problems like this not as isolated tasks, but as systems that need to work reliably under real-world conditions.",
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
