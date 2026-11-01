 Step / Tool | Prompt Summary | Model Output Used | Model Output Rejected & Rationale | Verification Method | Associated Git Commit |
| :--- | :--- | :--- | :--- | :--- | :--- |
AI Provenance Journal
Step / Tool	Prompt Summary	Model Output Used	Model Output Rejected & Rationale	Verification Method	Associated Git Commit
Cursor	Generate Next.js application shell and project structure	Initial application shell and project setup	None	Verified application ran successfully in local development environment	Initial app shell commit
Cursor	Fix lint errors across project files	Recommended lint corrections	None	Verified with npm run lint passing successfully	Lint fixes committed
Cursor	Explain build failures and deployment issues	Build troubleshooting guidance	None	Verified with successful local build and deployment troubleshooting	Build fixes committed
ChatGPT	Review repository against midterm exam requirements and identify gaps	Requirements audit, traceability matrix guidance, deployment troubleshooting, Git workflow verification	Suggestions involving Vitest were modified to fit deployment requirements and avoid production build failures	Verified using Git history, successful Vercel deployment, local testing, and clean Git status	ef12445, 000ed96, 5593462, 334b0fa
ChatGPT	Generate requirements traceability matrix	Traceability matrix content and requirement mapping	None	Verified against Lab 1–6 deliverables and repository artifacts	ef12445
ChatGPT	Troubleshoot Vercel deployment failures	Identified Vitest dependency conflicts and test-file deployment blockers	Vitest-based deployment strategy rejected because deployment did not require test execution	Verified by successful Vercel deployment status "Ready"	5593462, 334b0fa
Gemini	Accessibility review of PropertyCard component	Accessibility recommendations regarding aria-labels, focus indicators, and semantic structure	None	Verified through keyboard navigation testing and accessibility review	1b23bec
ChatGPT	Security and Git hygiene review	Secret quarantine verification and .gitignore review	None	Verified using git status and inspection of .gitignore	Multiple commits