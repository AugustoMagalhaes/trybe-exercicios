let salary = 6000;
let salaryIR = null;
let salaryDiscountInss = null;


function getSalaryIR(employeeSalary) {
    if (employeeSalary <= 1903.98) {
        return 0;
    } else if (employeeSalary > 1903.98 && employeeSalary <= 2826.65) {
        return employeeSalary * 0.075;
    } else if (employeeSalary > 2826.65 && employeeSalary <= 3751.05) {
        return employeeSalary * 0.15;
    } else if (employeeSalary > 3751.05 && employeeSalary <= 4664.68) {
        return employeeSalary * 0.225;
    } else if (employeeSalary > 4664.68) {
        return employeeSalary * 0.275;
    }

}

function getSalaryDiscountInss(employeeSalary) {
    if (employeeSalary <= 1556.94) {
        return employeeSalary *= 0.92;
    } else if (employeeSalary > 1556.94 && employeeSalary <= 2594.92) {
        return employeeSalary *= 0.91;
    } else if (employeeSalary > 2594.92 && employeeSalary <= 5189.82) {
        return employeeSalary *= 0.89;
    } else if (employeeSalary > 5189.82) {
        return employeeSalary -= 570.88;
    }
}

try  {
    if (salary <= 0) {
        throw "Considere um salário válido."
    }
} catch (err) {
    console.log(err);
} finally {
    
    let salaryAfterInssDiscount = getSalaryDiscountInss(salary);    
    salary = salaryAfterInssDiscount - getSalaryIR(salaryAfterInssDiscount);
    console.log("Resultado: ", salary)    
}