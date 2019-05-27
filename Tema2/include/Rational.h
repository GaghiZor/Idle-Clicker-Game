#include "Pereche.h"

#ifndef RATIONAL_H
#define RATIONAL_H

class Rational : public Pereche
{
public:
    Rational();
    Rational(double, double);

    Rational operator+(Rational const &num);
    Rational operator*(Rational const &num);
};

#endif // RATIONAL_H
