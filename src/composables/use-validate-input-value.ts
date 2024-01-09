import { Ref, computed, unref } from "vue";

export const pattern = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
};

export const useValidateInputValue = (value: {
  email?: Ref<string> | string;
}) => {
  const isValidEmailValue = computed<boolean>(() => {
    const v = unref(value.email);
    if (v) {
      return (
        v.length === 0 || // input data가 비어있다면
        !v.match(pattern.email) // input data가 email형식이 아니라면
      );
    } else {
      return false;
    }
  });
  return {
    isValidEmailValue,
  };
};
