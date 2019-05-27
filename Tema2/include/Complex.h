#include "Pereche.h"

#ifndef COMPLEX_H
#define COMPLEX_H

class Complex : public Pereche
{
    public:
        Complex();
        Complex(double, double);

        Complex operator+ (Complex const &num);
        Complex operator* (Complex const &num);
};

#endif
