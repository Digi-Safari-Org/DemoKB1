# Lab 1.1 - Using Copilot Context with Internal Repos

## Scenario
You are working in a large internal HRMS repo. Your goal is to use GitHub Copilot’s context awareness to implement missing logic in `leave_management.py`.


---

## ✅ Tasks

Use Copilot to:
1. Open `leave_management.py` and complete the `calculate_remaining_leave()` function.
2. Ensure your logic references `get_employee_leave_record()` from `employee_data.py`.
3. Use Copilot’s **inline suggestions** and **chat** mode to guide you.
4. Test it with a sample employee ID (`"EMP1001"`).
5. Add a new field `carry_over` to the logic if Copilot misses it initially.

---

## ✨ Goal

```
calculate_remaining_leave("EMP1001")  # ➞ 16 (25 total + 3 carry over - 12 taken)
```

#### Try with these:
1. calculate remaining leave using total, taken, and carry_over
2. Use chat: @copilot, explain what’s missing in this function or fill in the function using other file's context