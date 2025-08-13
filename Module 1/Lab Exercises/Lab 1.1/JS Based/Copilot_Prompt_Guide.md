# Copilot Prompt Guide for Lab 1.1 (JS): Using Context with Internal Repos

## Overview
This guide provides useful prompts and instructions for leveraging GitHub Copilot Chat and inline suggestions to complete the lab tasks in Lab 1.1 (JS). Use these prompts in the Copilot Chat sidebar or as inline comments to maximize Copilot's context awareness and productivity.

---

## Prompts for leave_management.js

### 1. Complete the Function
**Prompt:**
> Complete the `calculateRemainingLeave()` function using the employee's leave record from `employee_data.js`. Include total, taken, and carry_over fields in the calculation.

### 2. Reference Another File
**Prompt:**
> How do I use `getEmployeeLeaveRecord()` from `employee_data.js` to fetch leave data for a given employee ID?

### 3. Explain or Fill in Logic
**Prompt:**
> @copilot, explain what’s missing in this function or fill in the function using other file's context.

### 4. Add New Field
**Prompt:**
> Add logic to include the `carry_over` field in the leave calculation if it is not already present.

### 5. Test the Function
**Prompt:**
> How can I test `calculateRemainingLeave("EMP1001")` to verify it returns the correct value?

---

## General Copilot Chat Prompts

- "Analyze this file and suggest improvements for clarity and maintainability."
- "What is the purpose of each function in this file?"
- "Suggest better variable and function names based on their usage."
- "Are there any edge cases I should handle in leave calculations?"

---

## Inline Comment Prompts

Add these as comments in your code to guide Copilot:
```javascript
// Use getEmployeeLeaveRecord to fetch leave data
// Calculate remaining leave including carry_over
// Suggest improvements for error handling
```

---

## Tips
- Open both `leave_management.js` and `employee_data.js` for best results.
- Use Copilot Chat to ask about cross-file logic and dependencies.
- Try Copilot’s suggestions, then review and refine as needed.

---

Happy coding with Copilot!
