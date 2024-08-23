// set all states

const setState = (() => {
  const { data } = demographic.getAllStates();
  let optionset = [];
  optionset.push("<option value='' >Select</option>")

  data?.forEach((element) => {
    const html = `<option value="${element?.state_code}">${element?.state_title}</option>`;
    optionset.push(html);
  });
  document.querySelector("#state").innerHTML = optionset.join("");


})

// set districts
const setDistricts = (() => {
  const state = $("#state").val();
  const { data } = demographic.getDistricts(state)
  let optionset = [];
  optionset.push("<option value='' >Select</option>")

  // set data
  data?.forEach((element) => {
    const html = `<option value="${element?.district_code}">${element?.district_title}</option>`;
    optionset.push(html);
  });
  document.querySelector("#district").innerHTML = optionset.join("");
})

// set blocks
const setBlocks = (() => {
  const district = $("#district").val();
  const { data } = demographic.getBlocks(district)
  let optionset = [];
  optionset.push("<option value='' >Select</option>")
  // set data
  data?.forEach((element) => {
    const html = `<option value="${element?.block_code}">${element?.block_title}</option>`;
    optionset.push(html);
  });
  document.querySelector("#block").innerHTML = optionset.join("");
})
// set villages
const setVillages = (() => {
  const block = $("#block").val();
  const { data } = demographic.getVillages(block)
  let optionset = [];
  optionset.push("<option value=''>Select</option>")

  // set data
  data?.forEach((element) => {
    const html = `<option value="${element?.village_code}">${element?.village_name}</option>`;
    optionset.push(html);
  });
  document.querySelector("#village").innerHTML = optionset.join("");
})



$(document).ready(function () {
  if ($("#state").length > 0) {
    setState();
  }

});
$("#state").change(setDistricts);
$("#district").change(setBlocks);
$("#block").change(setVillages);

const setFormDemographics = ((state, district, block, village) => {

  // set state value
  $("#state").val(state)

  // load all districts
  setDistricts();
  // set district
  $("#district").val(district)

  // load all blocks
  setBlocks()
  // set blocks
  $("#block").val(block)

  // load villages
  setVillages()

  // set village
  $("#village").val(village)

})