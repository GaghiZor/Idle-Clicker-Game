#include "Complex.h"

Complex::Complex()
{
    a = 0;
    b = 0;
}

Complex::Complex(double x, double y)
{
    a = x;
    b = y;
}

Complex Complex::operator+(Complex const & num)
{
    Complex sum;
    sum.a = a + num.a;
    sum.b = b + num.b;
    return sum;
}

Complex Complex::operator*(Complex const & num)
{
    Complex mul;
    mul.a = a * num.a - b * num.b;
    mul.b = b * num.a + a * num.b;
    return mul;
}
