import React from "react";
import { DatePicker } from "@fluentui/react";
import moment from 'moment';

export default (props) => {
  const {
    value,
    setValue,
    config,
    valueFormat,
    dateFormat,
    readonly,
    customProps,
    placeholder,
  } = props;

  const onChange = (date) => {
    if (date == "" ) date = undefined;
    var dateValue=moment(new Date(date)).format(valueFormat);
    setValue(dateValue) 
  };

  return (
    <DatePicker
      disabled={readonly}
      selectedDate={value}
      onSelectDate={onChange}
      style={{ width: "auto", marginRight: "0.25rem", width: '150px'}}
      placeholder={placeholder}
      {...customProps}
    />
  );
};
