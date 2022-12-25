function setup() {
  createCanvas(400, 400);
  input = createInput();
  input.position(20, 85);
  
  button = createButton('done');
  button.position(input.x + input.width, 85);
  button.mousePressed(calculate);
  greeting = createElement('h2', 'DNA');
  greeting.position(20, 40);
  header = createElement('h2', 'Bio-DNA Translation');
  header.position(100, 0);
  background(220);
}
function calculate(){
  AminoAcidTriplet = ['AAA','Lys','AAC','Asn','AAG','Lys','AAT','Asn','ACA','Thr','ACC','Thr','ACG','Thr','ACT','Thr','AGA','Arg','AGC','Ser','AGG','Arg','AGT','Ser','ATA','Ile','ATC','Ile','ATG','Met','ATT','Ile','CAA','Gln','CAC','His','CAG','Gln','CAT','His','CCA','Pro','CCC','Pro','CCG','Pro','CCT','Pro','CGA','Arg','CGC','Arg','CGG','Arg','CGT','Arg','CTA','Leu','CTC','Leu','CTG','Leu','CTT','Leu','GAA','Glu','GAC','Asp','GAG','Glu','GAT','Asp','GCA','Ala','GCC','Ala','GCG','Ala','GCT','Ala','GGA','Gly','GGC','Gly','GGG','Gly','GGT','Gly','GTA','Val','GTC','Val','GTG','Val','GTT','Val','TAA','Stp','TAC','Tyr','TAG','Stp','TAT','Tyr','TCA','Ser','TCC','Ser','TCG','Ser','TCT','Ser','TGA','Stp','TGC','Cys','TGG','Trp','TGT','Cys','TTA','Leu','TTC','Phe','TTG','Leu','TTT','Phe'];
  
  const DNA = str(input.value());
  const Swap = {'T':'A','A':'T','G':'C','C':'G', ' ': '', '  ':''};
  const Swap2 = {'T':'U'};
  
  mRNA = DNA.toUpperCase().replace(/[TAGC   ]/g, m => Swap[m]);
  mRNA1 = mRNA.replace(/T/g, 'U');
  x1 = 0;
  x2 = 3;
  Triplet = [30];
  for (i = 0; mRNA.length >= i; i++)
    {
      Triplet[i] = mRNA.substring(x1, x2);
      x1+=3;
      x2+=3;
      print(Triplet[i]);
}
  var aminoAcid = '';
  for (i = 0; mRNA.length >= i; i++)
    {
      aminoS = (AminoAcidTriplet.findIndex((x) => x === Triplet[i]));
      print(aminoS);
      if(aminoS>=0)
        {
          aminoAcid = aminoAcid + AminoAcidTriplet[aminoS+1];
        }
}
  input2 = createInput(mRNA1);
  input2.position(20, 135);
  greeting1 = createElement('h2', 'mRNA');
  greeting1.position(20, 90);
  
  input3 = createInput(aminoAcid);
  input3.position(20, 185);
  greeting2 = createElement('h2', 'AminoAcid');
  greeting2.position(20, 140);
}



  //greeting.html('DNATRiplet =1/ ' + Triplet[1] + ' /1');
  //greeting.html('DNA =/ ' + DNA2 + ' /');
