// employee_data.js
// Provides employee leave records
function getEmployeeLeaveRecord(employeeId) {
    // Dummy data for demonstration
    const records = {
        'EMP1001': { total: 25, taken: 12, carry_over: 3 },
        'EMP1002': { total: 20, taken: 5, carry_over: 0 }
    };
    return records[employeeId] || null;
}

module.exports = { getEmployeeLeaveRecord };
