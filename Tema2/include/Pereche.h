#include <iostream>
#include <math.h>

#ifndef PERECHE_H
#define PERECHE_H

using std::ostream;

class Pereche
{
public:
    Pereche();
    Pereche(double, double);

    friend ostream& operator<<(ostream& o, const Pereche& s);

protected:
    double a;
    double b;
};


#endif // PERECHE_H
