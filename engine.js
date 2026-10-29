
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
    if (joint.verified !== true) return false;

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
