import React from "react";
import moment from "moment";

export const MyHelper = {
  formatDate(value, format = "DD/MM/YYYY") {
    if (!value) {
      return null;
    }
    return moment(value).format(format);
  },
  timestempToDateTime(value, format = "DD/MM/YYYY HH:mm") {
    if (!value) {
      return null;
    }
    return moment(new Date(value * 1000)).format(format);
  },

  formatTableDate(value, format) {
    if (!value) {
      return null;
    }
    return moment(value).format(format || "DD/MM/YYYY");
  },

  formatUTCDate(value, format) {
    if (!value) {
      return null;
    }
    return moment(value)
      .set({ hour: "0", minute: "0", second: "0", millisecond: "0" })
      .toISOString();
  },

  formatDateBold(value, format) {
    return (
      <span style={{ fontWeight: 600, color: "#e8be22" }}>
        {moment(value).format(format || "DD MMM YYYY")}
      </span>
    );
  },

  renderDateFromTo(from, to) {
    if (!from) {
      return <span>To {this.formatDateBold(to)}</span>;
    }

    return (
      <span>
        From {this.formatDateBold(from)} to {this.formatDateBold(to)}
      </span>
    );
  },

  formatTime(value, format) {
    if (!value) {
      return null;
    }
    return moment(value).format(format || "DD MMM YYYY hh:mm A");
  },

  formatDateTimeSecond(value, format) {
    if (!value) {
      return null;
    }
    return moment(value).format(format || "DD-MM-YYYY HH:mm:ss");
  },

  getLocateTime(value) {
    if (!value) {
      return null;
    }
    return moment.utc(value).local();
  },

  compareDate: (date1, date2) => {
    const moment1 = moment(date1, "YYYY-MM-DD");
    const moment2 = moment(date2, "YYYY-MM-DD");
    return moment1.isAfter(moment2);
  },
  isNullOrUndefined: (param) => {
    return (
      param === null || param === undefined || param === "" || param.length <= 0
    );
  },

  isNullOrEmptyItems: (param) => {
    return param === null || param === undefined || param.length <= 0;
  },

  getParam: (searchParams) => {
    const searchParamsString = decodeURIComponent(searchParams.toString());
    const searchParamObject = objectSearchParams(searchParamsString);
    return searchParamObject
  },
  
};

const objectSearchParams = (params) => {
    const result =  JSON.parse('{"' + decodeURI(params).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    return result
}