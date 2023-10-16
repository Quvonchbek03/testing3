  
  function testYourKnowledge() {
     const Savollar = [
      {
        savol: "9X3",
        variant: ["A. 24", "B. 27", "C. 30", "D. 33"],
        javobi: "B",
      },
      {
        savol: "3X8?",
        variant: ["A. 56", "B. 49", "C. 24", "D. 35"],
        javobi: "C",
      },
      {
        savol: "8X2",
        variant: ["A. 16", "B. 49", "C. 42", "D. 35"],
        javobi: "A",
      },
      {
        savol: "5X9?",
        variant: ["A. 45", "B. 49", "C. 42", "D. 35"],
        javobi: "A",
      },
      {
        savol: "4X3?",
        variant: ["A. 56", "B.12", "C. 42", "D. 35"],
        javobi: "B",
      },
      ];    
      let togriJavoblar = 0;
      const boshlanishVaqti= new Date();
      for (let i = 0; i < Savollar.length; i++) {
       
       const userJavobi = prompt(
       Savollar[i].savol + "\n Variantlar: \n" + Savollar[i].variant.join("\n"));
       console.log(userJavobi.toLocaleUpperCase());
        if (`userJavobi.toLocaleUpperCase() === Savollar[i].javobi  userJavobi.toLocaleUpperCase().includes(Savollar[i].javobi)`) {
        togriJavoblar++;
       } else if (`userJavobi === ""  userJavobi === null`) {
        alert("Siz variant belgilamadingiz");
       }
       else if (userJavobi ==! Savollar[i].javobi) {
          alert("Qayta kirting") ;
      }
      }
      const tugashVaqti=new Date ();
      const sarflanganvaqt=(tugashVaqti-boshlanishVaqti)/1000;
      alert(Savollar.length + " ta savoldan" + togriJavoblar + " ta to'g'ri bajardingiz.");
      alert(sarflanganvaqt+ "sekund vaqtda bajardingiz")
      }
      testYourKnowledge();

