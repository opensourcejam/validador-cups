/**
 * Validate a Cups ID.
 *
 * @link https://es.wikipedia.org/wiki/C%C3%B3digo_Unificado_de_Punto_de_Suministro
 *
 * @param cupsId
 * @returns boolean
 */

export default function validate(cupsId: string): boolean {
  if (typeof cupsId !== "string") {
    return false;
  }

  cupsId = cupsId.replace(/\s/g, "");

  if (cupsId.length !== 20 && cupsId.length !== 22) {
    return false;
  }

  const country = cupsId.slice(0, 2);
  if (country !== "ES") {
    return false;
  }

  const reeId = cupsId.slice(2, 6);
  const distId = cupsId.slice(6, 18);

  const validEELetters = "TRWAGMYFPDXBNJZSQVHLCKE";

  const controlDigit1 = cupsId.slice(18, 19);
  const controlDigit2 = cupsId.slice(19, 20);
  const naturalNumber = BigInt(reeId + distId);

  const controlIndex1 = validEELetters.indexOf(controlDigit1);
  const controlIndex2 = validEELetters.indexOf(controlDigit2);

  if (controlIndex1 === -1 || controlIndex2 === -1) {
    return false;
  }

  if (cupsId.length === 22) {
    const n = parseInt(cupsId.slice(20, 21));
    const validTLetters = "CFPXYZ";
    const t = cupsId.slice(21, 22);
    const inValidN = typeof n !== "number";
    const invalidT = validTLetters.indexOf(t) === -1;

    if (inValidN || invalidT) {
      return false;
    }
  }

  const restR0 = naturalNumber % 529n;
  const quotientC = restR0 / 23n;
  const restR = restR0 % 23n;

  const c = validEELetters.charAt(Number(quotientC));
  const r = validEELetters.charAt(Number(restR));

  return controlDigit1 === c && controlDigit2 === r;
}
