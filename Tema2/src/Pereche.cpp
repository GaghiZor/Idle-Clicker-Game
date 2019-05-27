#include "Pereche.h"

Pereche::Pereche()
{
}

Pereche::Pereche(double x, double y)
{
    a = x;
    b = y;
}

ostream& operator<<(ostream& o, const Pereche& s)
{
    o << "(" << s.a << ", " << s.b << ")";
    return o;
}
