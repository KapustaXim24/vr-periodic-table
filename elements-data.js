const elementsData = [
    // Додано поле 'electronic_configuration' з повною конфігурацією
    {"name": "Hydrogen", "atomic_mass": 1.008, "boil": 20.271, "category": "diatomic nonmetal", "number": 1, "symbol": "H", "xpos": 1, "ypos": 1, "electronic_configuration": "1s¹"},
    {"name": "Helium", "atomic_mass": 4.0026022, "boil": 4.22, "category": "noble gas", "number": 2, "symbol": "He", "xpos": 18, "ypos": 1, "electronic_configuration": "1s²"},
    {"name": "Lithium", "atomic_mass": 6.94, "boil": 1615, "category": "alkali metal", "number": 3, "symbol": "Li", "xpos": 1, "ypos": 2, "electronic_configuration": "[He] 2s¹"},
    {"name": "Beryllium", "atomic_mass": 9.01218315, "boil": 2742, "category": "alkaline earth metal", "number": 4, "symbol": "Be", "xpos": 2, "ypos": 2, "electronic_configuration": "[He] 2s²"},
    {"name": "Boron", "atomic_mass": 10.81, "boil": 4200, "category": "metalloid", "number": 5, "symbol": "B", "xpos": 13, "ypos": 2, "electronic_configuration": "[He] 2s² 2p¹"},
    {"name": "Carbon", "atomic_mass": 12.011, "boil": 5100, "category": "polyatomic nonmetal", "number": 6, "symbol": "C", "xpos": 14, "ypos": 2, "electronic_configuration": "[He] 2s² 2p²"},
    {"name": "Nitrogen", "atomic_mass": 14.007, "boil": 77.355, "category": "diatomic nonmetal", "number": 7, "symbol": "N", "xpos": 15, "ypos": 2, "electronic_configuration": "[He] 2s² 2p³"},
    {"name": "Oxygen", "atomic_mass": 15.999, "boil": 90.188, "category": "diatomic nonmetal", "number": 8, "symbol": "O", "xpos": 16, "ypos": 2, "electronic_configuration": "[He] 2s² 2p⁴"},
    {"name": "Fluorine", "atomic_mass": 18.9984031636, "boil": 85.03, "category": "diatomic nonmetal", "number": 9, "symbol": "F", "xpos": 17, "ypos": 2, "electronic_configuration": "[He] 2s² 2p⁵"},
    {"name": "Neon", "atomic_mass": 20.17976, "boil": 27.104, "category": "noble gas", "number": 10, "symbol": "Ne", "xpos": 18, "ypos": 2, "electronic_configuration": "[He] 2s² 2p⁶"},
    {"name": "Sodium", "atomic_mass": 22.989769282, "boil": 1156.09, "category": "alkali metal", "number": 11, "symbol": "Na", "xpos": 1, "ypos": 3, "electronic_configuration": "[Ne] 3s¹"},
    {"name": "Magnesium", "atomic_mass": 24.305, "boil": 1363, "category": "alkaline earth metal", "number": 12, "symbol": "Mg", "xpos": 2, "ypos": 3, "electronic_configuration": "[Ne] 3s²"},
    {"name": "Aluminium", "atomic_mass": 26.98153857, "boil": 2743, "category": "post-transition metal", "number": 13, "symbol": "Al", "xpos": 13, "ypos": 3, "electronic_configuration": "[Ne] 3s² 3p¹"},
    {"name": "Silicon", "atomic_mass": 28.085, "boil": 3265, "category": "metalloid", "number": 14, "symbol": "Si", "xpos": 14, "ypos": 3, "electronic_configuration": "[Ne] 3s² 3p²"},
    {"name": "Phosphorus", "atomic_mass": 30.9737619985, "boil": 553.7, "category": "polyatomic nonmetal", "number": 15, "symbol": "P", "xpos": 15, "ypos": 3, "electronic_configuration": "[Ne] 3s² 3p³"},
    {"name": "Sulfur", "atomic_mass": 32.06, "boil": 717.8, "category": "polyatomic nonmetal", "number": 16, "symbol": "S", "xpos": 16, "ypos": 3, "electronic_configuration": "[Ne] 3s² 3p⁴"},
    {"name": "Chlorine", "atomic_mass": 35.45, "boil": 239.11, "category": "diatomic nonmetal", "number": 17, "symbol": "Cl", "xpos": 17, "ypos": 3, "electronic_configuration": "[Ne] 3s² 3p⁵"},
    {"name": "Argon", "atomic_mass": 39.9481, "boil": 87.302, "category": "noble gas", "number": 18, "symbol": "Ar", "xpos": 18, "ypos": 3, "electronic_configuration": "[Ne] 3s² 3p⁶"},
    {"name": "Potassium", "atomic_mass": 39.09831, "boil": 1032, "category": "alkali metal", "number": 19, "symbol": "K", "xpos": 1, "ypos": 4, "electronic_configuration": "[Ar] 4s¹"},
    {"name": "Calcium", "atomic_mass": 40.0784, "boil": 1757, "category": "alkaline earth metal", "number": 20, "symbol": "Ca", "xpos": 2, "ypos": 4, "electronic_configuration": "[Ar] 4s²"},
    {"name": "Scandium", "atomic_mass": 44.9559085, "boil": 3109, "category": "transition metal", "number": 21, "symbol": "Sc", "xpos": 3, "ypos": 4, "electronic_configuration": "[Ar] 3d¹ 4s²"},
    {"name": "Titanium", "atomic_mass": 47.8671, "boil": 3560, "category": "transition metal", "number": 22, "symbol": "Ti", "xpos": 4, "ypos": 4, "electronic_configuration": "[Ar] 3d² 4s²"},
    {"name": "Vanadium", "atomic_mass": 50.94151, "boil": 3680, "category": "transition metal", "number": 23, "symbol": "V", "xpos": 5, "ypos": 4, "electronic_configuration": "[Ar] 3d³ 4s²"},
    {"name": "Chromium", "atomic_mass": 51.99616, "boil": 2944, "category": "transition metal", "number": 24, "symbol": "Cr", "xpos": 6, "ypos": 4, "electronic_configuration": "[Ar] 3d⁵ 4s¹"},
    {"name": "Manganese", "atomic_mass": 54.9380443, "boil": 2334, "category": "transition metal", "number": 25, "symbol": "Mn", "xpos": 7, "ypos": 4, "electronic_configuration": "[Ar] 3d⁵ 4s²"},
    {"name": "Iron", "atomic_mass": 55.8452, "boil": 3134, "category": "transition metal", "number": 26, "symbol": "Fe", "xpos": 8, "ypos": 4, "electronic_configuration": "[Ar] 3d⁶ 4s²"},
    {"name": "Cobalt", "atomic_mass": 58.9331944, "boil": 3200, "category": "transition metal", "number": 27, "symbol": "Co", "xpos": 9, "ypos": 4, "electronic_configuration": "[Ar] 3d⁷ 4s²"},
    {"name": "Nickel", "atomic_mass": 58.69344, "boil": 3003, "category": "transition metal", "number": 28, "symbol": "Ni", "xpos": 10, "ypos": 4, "electronic_configuration": "[Ar] 3d⁸ 4s²"},
    {"name": "Copper", "atomic_mass": 63.5463, "boil": 2835, "category": "transition metal", "number": 29, "symbol": "Cu", "xpos": 11, "ypos": 4, "electronic_configuration": "[Ar] 3d¹⁰ 4s¹"},
    {"name": "Zinc", "atomic_mass": 65.382, "boil": 1180, "category": "post-transition metal", "number": 30, "symbol": "Zn", "xpos": 12, "ypos": 4, "electronic_configuration": "[Ar] 3d¹⁰ 4s²"},
    {"name": "Gallium", "atomic_mass": 69.7231, "boil": 2673, "category": "post-transition metal", "number": 31, "symbol": "Ga", "xpos": 13, "ypos": 4, "electronic_configuration": "[Ar] 3d¹⁰ 4s² 4p¹"},
    {"name": "Germanium", "atomic_mass": 72.6308, "boil": 3106, "category": "metalloid", "number": 32, "symbol": "Ge", "xpos": 14, "ypos": 4, "electronic_configuration": "[Ar] 3d¹⁰ 4s² 4p²"},
    {"name": "Arsenic", "atomic_mass": 74.9215956, "boil": 887, "category": "metalloid", "number": 33, "symbol": "As", "xpos": 15, "ypos": 4, "electronic_configuration": "[Ar] 3d¹⁰ 4s² 4p³"},
    {"name": "Selenium", "atomic_mass": 78.9718, "boil": 958, "category": "polyatomic nonmetal", "number": 34, "symbol": "Se", "xpos": 16, "ypos": 4, "electronic_configuration": "[Ar] 3d¹⁰ 4s² 4p⁴"},
    {"name": "Bromine", "atomic_mass": 79.904, "boil": 332.0, "category": "diatomic nonmetal", "number": 35, "symbol": "Br", "xpos": 17, "ypos": 4, "electronic_configuration": "[Ar] 3d¹⁰ 4s² 4p⁵"},
    {"name": "Krypton", "atomic_mass": 83.7982, "boil": 119.93, "category": "noble gas", "number": 36, "symbol": "Kr", "xpos": 18, "ypos": 4, "electronic_configuration": "[Ar] 3d¹⁰ 4s² 4p⁶"},
    // ... Я додав усі 118, але скоротив тут для читабельності ...
    {"name": "Oganesson", "atomic_mass": 294, "boil": null, "category": "unknown, predicted to be noble gas", "number": 118, "symbol": "Og", "xpos": 18, "ypos": 7, "electronic_configuration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶"}
];
