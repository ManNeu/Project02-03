module.exports = function (sequelize, DataTypes) {
  var Disease = sequelize.define(
    "Disease",
    {
      disease: DataTypes.STRING,
      // complete: DataTypes.BOOLEAN,
    },
    {
      timestamps: false,
    }
  );

  // Disease.bulkCreate([
  //   { disease: "Cholera", complete: 0 },
  //   { disease: "Hepatitis A", complete: 0 },
  //   { disease: "Hepatitis B", complete: 0 },
  //   { disease: "Malaria", complete: 0 },
  //   { disease: "Measels", complete: 0 },
  //   { disease: "Meningitis", complete: 0 },
  //   { disease: "Polio", complete: 0 },
  //   { disease: "Rabies", complete: 0 },
  //   { disease: "Typhoid", complete: 0 },
  //   { disease: "Yellow Fever", complete: 0 },
  //   { disease: "Japanese Encephalitis", complete: 0 },
  //   { disease: "Pneumonia", complete: 0 },
  //   { disease: "Mumps", complete: 0 },
  //   { disease: "Rubella", complete: 0 },
  //   { disease: "Tetinus", complete: 0 },
  //   { disease: "Diphtheria", complete: 0 },
  //   { disease: "Pertussis", complete: 0 },
  //   { disease: "Chickenpox (Varicella)", complete: 0 },
  //   { disease: "Influenza", complete: 0 },
  //   { disease: "HPV (Human Papillomavirus)", complete: 0 },
  //   { disease: "Shingles (Herpes Zoster)", complete: 0 },
  //   { disease: "Covid-19", complete: 0 },
  // ]);

  return Disease;
};
