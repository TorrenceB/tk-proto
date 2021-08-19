const initAdminLandingView = (function () {
  const userListContainer = document.getElementById("user-list__container");
  const dateRangePicker = document.getElementById("date-range-picker");

  const loadUserGrid = () => {
    $(userListContainer).kendoGrid({
      dataSource: new kendo.data.DataSource({
        transport: {
          read: function (options) {
            options.success([
              {
                employeeName: "Corey Purcella",
                organizationName: "Real Time Solutions",
                supplierName: "Some Supplier",
                hourlyRate: "$70.00",
                hours: 80,
                timecardStatus: "Pending",
                action: "Send Reminder",
              },
              {
                employeeName: "Dexter Hall",
                organizationName: "LOPD",
                supplierName: "Dexter Hall LLC",
                hourlyRate: "$65.00",
                hours: 65,
                timecardStatus: "Submitted",
                action: "Approve Timecard",
              },
              {
                employeeName: "Jimmy Dean",
                organizationName: "RLD",
                supplierName: "Robert Half",
                hourlyRate: "$30.00",
                hours: 70,
                timecardStatus: "Approved",
                action: "Edit Timecard",
              },
              {
                employeeName: "George Clooney",
                organizationName: "DFG Company",
                supplierName: "Something Staffing",
                hourlyRate: "$65.00",
                hours: 65,
                timecardStatus: "Approved",
                action: "Edit Timecard",
              },
              {
                employeeName: "John Doe",
                organizationName: "ABC Company",
                supplierName: "Something Staffing",
                hourlyRate: "$50.00",
                hours: 75,
                timecardStatus: "Submitted",
                action: "Approve Timecard",
              },
            ]);
          },
        },
        pageSize: 15,
        serverPaging: false,
        serverFiltering: false,
      }),
      columns: [
        {
          field: "employeeName",
          title: "Name",
          template: ({ employeeName, employeeId }) =>
            `<a href="javascript:void(0)" data-employee-id="${employeeId}">${employeeName}</a>`,
        },
        {
          field: "type",
          title: "Type",
        },
        {
          field: "organizationName",
          title: "Customer",
          media: "(min-width: 700px)",
          template: ({ organizationName, organizationId }) =>
            `<a href="javascript:void(0)" data-organization-id="${organizationId}">${organizationName}</a>`,
        },
        {
          field: "supplierName",
          title: "Supplier Name",
          media: "(min-width: 700px)",
          template: ({ supplierName, supplierId }) => `
            <a href="javascript:void(0)" data-supplier-id="${supplierId}">${supplierName}</a>
          `,
        },
        {
          field: "hours",
          title: "Hours",
          media: "(min-width: 1260px)",
        },
        {
          field: "hourlyRate",
          title: "Hourly Rate",
          media: "(min-width: 850px)",
        },

        {
          field: "timecardStatus",
          title: " Timecard Status",
          template: ({ timecardStatus }) => {
            let iconState = {
              icon: "",
              colorClass: "",
            };

            if (timecardStatus === "Pending") {
              iconState = {
                icon: "fas fa-pause",
                colorClass: "color-caution",
              };
            } else if (timecardStatus === "Approved") {
              iconState = {
                icon: "fas fa-thumbs-up",
                colorClass: "color-success",
              };
            } else if (timecardStatus === "Submitted") {
              iconState = {
                icon: "fas fa-check",
                colorClass: "color-primary",
              };
            }

            return `<span><i class="${iconState.icon} ${iconState.colorClass} px-half"></i>${timecardStatus}</span>`;
          },
        },
        {
          field: "actions",
          title: "Actions",
          media: "(min-width: 1730px)",
          template: ({ action }) => {
            let buttonState = "";

            if (action === "Send Reminder") {
              buttonState = "primary-solid-yellow";
            } else if (action === "Approve Timecard") {
              buttonState = "primary-solid-blue";
            } else if (action === "Edit Timecard") {
              buttonState = "primary-solid-red";
            }

            return `<button class="${buttonState} margin-reset">${action}</button>`;
          },
        },
      ],
      scrollable: false,
      pageable: true,
    });
  };

  const loadDateRangePicker = () => {
    const currentDate = new Date();
    const maxDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 60
    );

    $(dateRangePicker).kendoDateRangePicker({
      range: [currentDate, maxDate],
    });
  };

  $(document).ready(function () {
    loadUserGrid();
    loadDateRangePicker();
  });
})();
