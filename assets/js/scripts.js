// form dynamic select list
const form_radios = document.querySelectorAll(".service-type");

const design_and_photography_options = [
  "التصوير الإعلاني",
  "التصوير المعماري",
  "تصوير الفعاليات",
  "التصوير الشخصي",
  "تصاميم حسابات وسائل التواصل الاجتماعي",
  "تصميم المطبوعات",
];
const accounting_options = [
  "خدمات مسك الدفاتر المحاسبية",
  "خدمات إنشاء الشجرة المحاسبية",
  "خدمات إعداد القوائم المالية والتوضيحات والافصاحات",
  "خدمات محاسبة التكاليف",
  "خدمات التسويات البنكية",
  "خدمات ضريبة القيمة المضافة",
  "خدمات الزكاة والضرائب",
  "خدمات المراجعة والتدقيق",
  "خدمات الإجراءات المتفق عليها إدارة الشؤون المالية والمحاسبية",
];

const hr_options = [
  "خدمات التوظيف",
  "خدمات المزايا والمكافآت والأمور المالية",
  "خدمات شؤون الموظفين",
  "الخدمات التنظيمية والامتثال لقوانين العمل",
  "خدمات التطوير والتدريب",
];
const governmentServicesArray = [
  "متابعة الاشتراطات الحكومية الواجب توفرها بالمنشأة وتزويد العميل بها لمختلف الجهات",
  "المتابعة الدورية للمنصات الحكومية المتعلقة بالمنشأة والقيام بالإجراءات اللازمة",
  "إصدار التراخيص الحكومية اللازمة للمنشأة إلكترونياً",
  "المتابعة الدورية للتراخيص الحكومية ذات العلاقة بالمنشأة وتنبيه العميل قبل انتهائها",
  "المتابعة الدورية للتراخيص الحكومية ذات العلاقة بموظفي المنشأة والتسجيل في الهيئات إن وجد",
  "متابعة ورفع الطلبات الحكومية المتعلقة بالمنشأة إلكترونياً",
  "التفاويض والتصاديق الحكومية إلكترونياً",
  "تنسيق مراجعات الجهات الحكومية حضورياً إذا لزم الأمر",
  "إجراءات نقل الكفالة وطلب العمالة والتأشيرات أو تسجيل الموظفين لدى التأمينات الاجتماعية",
];

const detailed_service_select_list =
  document.querySelector(".detailed-service");

form_radios.forEach((radioButton) => {
  console.log(form_radios);
  radioButton.addEventListener("change", function () {
    detailed_service_select_list.innerHTML = `<option selected value="">Open this select menu</option>`;
    const selectedValue = this.value;
    console.log(this.value);
    switch (selectedValue) {
      case "option1":
        addOptionsToSelect(accounting_options);
        break;
      case "option2":
        addOptionsToSelect(hr_options);
        break;
      case "option3":
        addOptionsToSelect(governmentServicesArray);
        break;
      default:
        detailed_service_select_list.innerHTML = `<option selected value="">Open this select menu</option>`;
        break;
    }
  });
});

function addOptionsToSelect(options) {
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    detailed_service_select_list.appendChild(optionElement);
  });
}

// ask-for-service-form
const form = document.getElementById("ask-for-service-form");
form.addEventListener("submit", (e) => {
  // Example starter JavaScript for disabling form submissions if there are invalid fields

  // Loop over them and prevent submission
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }
  form.classList.add("was-validated");

  const formData = new FormData(form);
  // output as an object
  console.log(Object.fromEntries(formData));
});

/*Setting Selected Class for active radios*/

const container_ids_for_radio_input_type = ["time-list", "service-type"];
// Add click event listener to each radio button
container_ids_for_radio_input_type.forEach((id) => {
  const radio_container = document.getElementById(id);
  const radioButtons = radio_container.querySelectorAll('input[type="radio"]');

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("click", function () {
      // Remove 'selected-item' class from all radio buttons
      radioButtons.forEach((rb) => {
        rb.parentNode.classList.remove("selected-item");
      });
      // Add 'selected-item' class to the clicked radio button's label
      this.parentNode.classList.add("selected-item");
    });
  });
});
