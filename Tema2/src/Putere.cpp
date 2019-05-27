#include "Putere.h"

Putere::Putere()
{
    a = 0;
    b = 0;
}

Putere::Putere(double x, double y)
{
    a = x;
    b = y;
}

Putere Putere::operator+(Putere const & num)
{
    Putere sum;

    sum.a = a;
    sum.b = pow(a, b) + pow(num.a, num.b);

    return sum;
}

Putere Putere::operator*(Putere const & num)
{
    Putere mul;

    mul.a = a;
    mul.b = pow(a, b) * pow(num.a, num.b);

    return mul;
}
