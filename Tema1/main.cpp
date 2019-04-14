#include <iostream>
#include <string.h>

using namespace std;

class Grupa {
    private:
        string facultate;
        string cod;
    public:
        Grupa(){}
        Grupa(string a, string b) {
            facultate = a;
            cod = b;
        }

        string getFac()
        {
            return facultate;
        }
        string getCod()
        {
            return cod;
        }

        void setFac(string a)
        {
            facultate = a;
        }
        void setCod(string a)
        {
            cod = a;
        }
};

class Student {
    private:
        Grupa g;
        string nume;
    public:
        Student(Grupa a, string b) {
            g.setFac(a.getFac());
            g.setCod(a.getCod());
            nume = b;
        }

        Grupa getG()
        {
            return g;
        }

        string getNume()
        {
            return nume;
        }

        void setG(Grupa a)
        {
            g = a;
        }

        void setNume(string a)
        {
            nume = a;
        }
};

ostream& operator<<(ostream& o, Grupa g){
    o << "Facultate: " << g.getFac();
    o << "; Cod Grupa: " << g.getCod();
    return o;
}

ostream& operator<<(ostream& o, Student s){
    o << "\nNume student: " << s.getNume() << endl;
    o << "Facultate: " << s.getG().getFac();
    o << "; Cod Grupa: " << s.getG().getCod();
    return o;
}


int main(){
    Grupa g1("IESC", "4781");
    Grupa g2("IESC", "4782");

    Student s1(g1, "Dan Popescu");
    Student s2(g1, "Vlad Ionescu");
    Student s3(g2, "Ioana Vasilescu");

    cout << s3.getG().getCod() << endl;

    Grupa g3 = s3.getG();

    g3.setCod("4781");
    s3.setG(g3);

    cout << s3.getG().getCod() << endl << endl;

    cout << g1 << endl << endl
         << g2 << endl << endl
         << s1 << endl << endl
         << s2 << endl << endl
         << s3 << endl;
}
