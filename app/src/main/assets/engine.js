
/*
 U-Joint Quick ID
 Identification Engine
 Offline Compatible
*/

function identifyUJoint(capDiameter, width, snapRingType) {
  const tolerance = 0.005;

  if (
    !Number.isFinite(capDiameter) ||
    !Number.isFinite(width) ||
    capDiameter <= 0 ||
    width <= 0
  ) {
    return [];
  }

  if (typeof UJOINT_DATABASE === "undefined") {
    return [];
  }

  return UJOINT_DATABASE.filter(joint => {
    if (joint.verified !== true ||
        joint.evidenceStatus !== "manufacturer_dimensions_confirmed" ||
        joint.widthDefinition !== "outside_cap_to_cap" ||
        typeof joint.source !== "string" || !joint.source.startsWith("https://")) return false;

    const capMatch =
      Math.abs(joint.capDiameter - capDiameter)
      <= tolerance;

    const widthMatch =
      Math.abs(joint.width - width)
      <= tolerance;

    const ringMatch =
      joint.snapRingType === snapRingType;

    return capMatch && widthMatch && ringMatch;
  });
}
