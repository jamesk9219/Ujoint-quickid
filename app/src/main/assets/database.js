/*
 U-Joint Quick ID — dimensions in inches.
 Only verified === true records qualify for matching.
 Dimensional verification does not approve applications or interchanges.
*/

const UJOINT_DATABASE = [
  {
    series: "1310",
    brand: "Spicer",
    part: "5-153X",
    capDiameter: 1.062,
    width: 3.219,
    snapRingType: "outside",
    lubrication: "greasable",
    verified: true,
    source: "https://www.danaaftermarket.com/Automotive/Automotive-Driveshaft/5-153X",
    evidenceStatus: "manufacturer_dimensions_confirmed",
    checkedOn: "2026-11-07",
    reviewScope: "Manufacturer dimensional data only; not application or interchange approval",
    widthDefinition: "outside_cap_to_cap",
    evidenceNote: "Dana lists both cap diameters 1.062 and both OSR cap-to-cap dimensions 3.219."
  },
  {
    series: "1310",
    brand: "Precision",
    part: "369",
    capDiameter: 1.063,
    width: 3.219,
    snapRingType: "outside",
    lubrication: "greasable",
    verified: false,
    evidenceStatus: "hold_width_and_retention_unconfirmed",
    evidenceNote: "Recovered research does not substantiate the existing width or outside-retainer classification. Existing values remain unverified research only."
  },
  {
    series: "1330",
    brand: "Spicer",
    part: "5-213X",
    capDiameter: 1.062,
    width: 3.625,
    snapRingType: "outside",
    lubrication: "greasable",
    verified: false,
    evidenceStatus: "catalog_only_pending_dimensions"
  },
  {
    series: "1350",
    brand: "Spicer",
    part: "5-178X",
    capDiameter: 1.188,
    width: 3.625,
    snapRingType: "outside",
    lubrication: "greasable",
    verified: true,
    source: "https://www.danaaftermarket.com/Automotive/Automotive-Driveshaft/5-178X",
    evidenceStatus: "manufacturer_dimensions_confirmed",
    checkedOn: "2026-11-08",
    reviewScope: "Manufacturer dimensional data only; not application or interchange approval",
    widthDefinition: "outside_cap_to_cap",
    evidenceNote: "Dana lists both cap diameters as 1.188 inches, both OSR cap-to-cap widths as 3.625 inches, external snap rings and greaseable construction.",
    interchangeApproved: false
  },
  {
    series: "1410",
    brand: "Spicer",
    part: "5-160X",
    capDiameter: 1.188,
    width: 4.188,
    snapRingType: "outside",
    lubrication: "greasable",
    verified: true,
    source: "https://www.danaaftermarket.com/Automotive/Automotive-Driveshaft/5-160X",
    evidenceStatus: "manufacturer_dimensions_confirmed",
    checkedOn: "2026-11-08",
    reviewScope: "Manufacturer dimensional data only; not application or interchange approval",
    widthDefinition: "outside_cap_to_cap",
    evidenceNote: "Dana lists both cap diameters as 1.188 inches, both OSR cap-to-cap widths as 4.188 inches, external snap rings and greaseable construction.",
    interchangeApproved: false
  },
  {
    series: "1310",
    brand: "Neapco",
    part: "1-0153",
    capDiameter: 1.063,
    width: 3.219,
    snapRingType: "outside",
    lubrication: "greasable",
    verified: false,
    evidenceStatus: "hold_cap_diameter_discrepancy",
    evidenceNote: "Existing file lists 1.063-inch caps; recovered research lists 1.062-inch caps. Discrepancy unresolved. Excluded from verified matching."
  },
  {
    series: "1310",
    brand: "Neapco",
    part: "1-0153G",
    capDiameter: 1.063,
    width: 3.219,
    snapRingType: "outside",
    lubrication: "non-greasable",
    verified: false,
    evidenceStatus: "hold_cap_diameter_discrepancy",
    evidenceNote: "Existing file lists 1.063-inch caps; recovered research lists 1.062-inch caps. Discrepancy unresolved. Excluded from verified matching."
  }
];
