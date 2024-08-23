const setValuesForm = (data) => {
  console.log("data foe set form", data);
  Object.keys(data).forEach((key) => {
    const selector = document.querySelector(`#${key}`);
    if (!selector) return;
    if (key == "state") {
      stateOptionsSet(document, data[key]);
      return;
    }
    if (key == "district" && data["district"]) {
      districtOptionsSet(data["state"], document, data[key]);
      return;
    }
    if (key == "anganwadi_id" && data["anganwadi_id"]) {
      anganvadiKendraOptionSet("", "", "", "", data[key]);
      return;
    }
    // if(key==="prakalpa_id"){
    // selector.value=data[key];
    // return
    // }
    // if(key==="bit_id"){
    //     selector.value=data[key]
    // }
    if (key == "block" && data["block"]) {
      blocksOptionsSet(data["district"], document, data[key]);
      return;
    }
    if (key == "village" && data["village"]) {
      villageOptionsSet(data["block"], document, data[key]);
      return;
    }
    if (key == "join_photo" || key == "pass_photo") return;
    else selector.value = data[key];
  });
};

const setBitForm = (data) => {
  Object.keys(data).forEach((key) => {
    const selector = document.querySelector(`#${key}`);
    if (!selector) return;
    if (key == "block") {
      blocksOptionsSet3(478, data[key]);
      return;
    }
    if (key == "prakalpa") {
      praklpaList(data["block"], data[key]);
      return;
    } else selector.value = data[key];
  });
};
