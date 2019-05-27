#include "Rational.h"

Rational::Rational()
{
    a = 0;
    b = 1;
}

Rational::Rational(double x, double y)
{
    a = x;
    b = y;
}

Rational Rational::operator+(Rational const & num)
{
    Rational sum;
    sum.a = a * num.b + b * num.a;
    sum.b = b * num.b;

    double r = 1, m, n;

    m = sum.a;
    n = sum.b;

    while (r != 0)
    {
        r = fmod(m, n);
        m = n;
        n = r;
    }

    sum.a /= m;
    sum.b /= m;

    return sum;
}

Rational Rational::operator*(Rational const &num)
{
    Rational mul;
    mul.a = a * num.a;
    mul.b = b * num.b;

    double r = 1, m, n;

    m = mul.a;
    n = mul.b;

    while (r != 0)
    {
        r = fmod(m, n);
        m = n;
        n = r;
    }

    mul.a /= m;
    mul.b /= m;

    return mul;
}
