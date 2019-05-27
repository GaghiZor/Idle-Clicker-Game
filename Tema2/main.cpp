#include <iostream>
#include "Pereche.h"
#include "Rational.h"
#include "Complex.h"
#include "Putere.h"

using namespace std;

int main()
{
    Rational r1(3, 14), r2(2, 7);
        cout << "Rational: " << r1 << " + " << r2 << " = " << r1 + r2 << endl;
        cout << "Rational: " << r1 << " * " << r2 << " = "<< r1 * r2 << endl;
    // ----------------------------------------------------------------------------------

   Complex c1(3, 14), c2(2, 7);
        cout << "Complex: " << c1 << " + " << c2 << " = " << c1 + c2 << endl;
        cout << "Complex: " << c1 << " * " << c2 << " = " << c1 * c2 << endl;
    // ----------------------------------------------------------------------------------

    Putere p1(3, 14), p2(2, 7);
        cout << "Putere: " << p1 << " + " << p2 << " = " << p1 + p2 << endl;
        cout << "Putere: " << p1 << " * " << p2 << " = " << p1 * p2 << endl;


    return 0;
}
