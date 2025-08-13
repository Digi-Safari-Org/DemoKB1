# Copilot Prompt Guide for Lab 3.1: Refactoring and Testing with Copilot Chat

## Overview

This guide provides practical prompts for using GitHub Copilot Chat and inline suggestions to complete the refactoring and testing tasks in Lab 3.1. Use these prompts in the Copilot Chat sidebar or as inline comments to maximize Copilot’s context awareness and productivity.

---

## Prompts for Refactoring Calculator Module (`flaky_module/calculator.py`)

### 1. Analyze and Suggest Improvements

**Prompt:**

> Analyze the code in `calculator.py` and suggest improvements for reliability, naming, and testability.

### 2. Refactor Flaky Logic

**Prompt:**

> Refactor any flaky or unreliable logic in this module. Make sure all functions have clear responsibilities and proper error handling.

### 3. Add Type Hints and Docstrings

**Prompt:**

> Add type hints and Google-style docstrings to all functions for better readability and maintainability.

---

## Prompts for Testing (`tests/test_calculator.py`)

### 1. Review and Expand Tests

**Prompt:**

> Review the tests for coverage and reliability. Add new tests for edge cases and error scenarios.

### 2. Fix Flaky Tests

**Prompt:**

> Identify and fix any flaky tests. Ensure all tests are deterministic and robust.

---

## Cross-File Context Prompts

### 1. Usage Analysis and Modularization

**Prompt:**

> How are functions in `calculator.py` used in `test_calculator.py`? Suggest improvements for modularity and reusability.

### 2. Apply Team Standards

**Prompt:**

> Apply our team's naming and testing standards to all code in this project. What changes are needed?

---

## Inline Comment Prompts

Add these as comments in your code to guide Copilot:

```python
# Refactor for reliability and clarity
# Add type hints and docstrings
# Improve error handling
# Add or expand tests for edge cases
```

---

## Tips

- Open both `calculator.py` and `test_calculator.py` for best results.
- Use Copilot Chat to ask about cross-file logic and dependencies.
- Try Copilot’s suggestions, then review and refine as needed.

---
