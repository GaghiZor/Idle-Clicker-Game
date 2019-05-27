#include "Pereche.h"

#ifndef PUTERE_H
#define PUTERE_H

class Putere : public Pereche
{
    public:
        Putere();
        Putere(double, double);

        Putere operator+ (Putere const &num);
        Putere operator* (Putere const &num);
};

#endif
