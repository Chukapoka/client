<template>
  <div :class="['sign-container', layoutTypeClass]">
    <div class="top">
      <cp-button
        type="solid"
        :icon="IconArrowLeft"
        width="auto"
        height="auto"
        bg-color="transparent"
        text-color="var(--cp-color-black)"
        @click="$emit('back')"
        >뒤로가기</cp-button
      >
    </div>
    <div class="top-text">
      <template v-if="currentStep === SignFormStepType.EMAIL">
        <div class="top-text__title cp-text-head-2">안녕하세요</div>
        <div class="top-text__title cp-text-head-2">이메일을 알려주세요</div>
        <div class="top-text__description cp-text-title-4">
          편지를 쓰기 위해 회원가입이 필요해요!
        </div>
      </template>
      <template v-if="currentStep === SignFormStepType.REQUEST_EMAIL_VERIFY">
        <div class="top-text__title cp-text-head-2">본인인증을 위해</div>
        <div class="top-text__title cp-text-head-2">
          메일로 코드를 보내드릴게요 :)
        </div>
        <div class="top-text__description cp-text-title-4">
          인증코드를 받으시려면 아래 버튼을 눌러주세요.
        </div>
      </template>
      <template v-if="currentStep === SignFormStepType.CHECK_EMAIL_NUMBER">
        <div class="top-text__title cp-text-head-2">
          작성하신 이메일로 코드를 전송했어요!
        </div>
        <div class="top-text__description cp-text-title-4">
          {{ emailValue }}의 메일함을 확인해주세요.
        </div>
      </template>
      <template v-if="currentStep === SignFormStepType.PASSWORD">
        <div class="top-text__title cp-text-head-2">반가워요~</div>
        <div class="top-text__title cp-text-head-2">
          비밀번호를 적어주세요 :)
        </div>
        <div class="top-text__description cp-text-title-4">
          영문자, 숫자를 이용해 8글자 이상의 비밀번호를 입력하세요.
        </div>
      </template>
    </div>
    <div class="input-form">
      <template v-if="currentStep === SignFormStepType.EMAIL">
        <cp-input
          v-model="emailValue"
          type="email"
          placeholder="example@example.com"
        />
      </template>
      <template v-if="currentStep === SignFormStepType.REQUEST_EMAIL_VERIFY">
        <cp-input
          v-model="emailValue"
          readonly
          type="email"
          placeholder="example@example.com"
        />
      </template>
      <template v-if="currentStep === SignFormStepType.CHECK_EMAIL_NUMBER">
        <cp-email-number-input
          v-model="verifyNumberValue"
        ></cp-email-number-input>
        <div class="resend-btn">
          <cp-button
            :class-arr="['cp-text-main-4']"
            type="solid"
            width="96px"
            height="31px"
            border-radius="var(--cp-number-4)"
            bg-color="var(--cp-color-gray-100)"
            text-color="var(--cp-color-gray-700)"
            hover-color="var(--cp-color-gray-300)"
            >코드 다시 받기</cp-button
          >
        </div>
      </template>
      <template v-if="currentStep === SignFormStepType.PASSWORD">
        <cp-input
          v-model="passwordValue"
          class="password"
          type="password"
          placeholder="비밀번호"
          show-password
        />
      </template>
    </div>
    <div class="button">
      <cp-button
        type="solid"
        :disabled="current.valid"
        @click="sendFormData(currentStep, current.value)"
      >
        {{ current.buttonText }}
      </cp-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaSignForm",
});
</script>
<script setup lang="ts">
import { ref, defineProps, computed, defineEmits } from "vue";
import CpEmailNumberInput from "@/components/commons/CpEmailNumberInput.vue";
import CpButton from "@/components/commons/CpButton.vue";
import CpInput from "@/components/commons/CpInput.vue";
import IconArrowLeft from "@/components/commons/images/IconArrowLeft.vue";
import { LayoutType } from "@/composables/use-window-size-wrap";
import { useValidateInputValue } from "@/composables/use-validate-input-value";
import {
  SignFormStepType,
  SignFormStepTypes,
} from "@/composables/use-user-controller";

const props = defineProps<{
  layoutType: LayoutType;
  currentStep: SignFormStepTypes;
}>();

const emits = defineEmits<{
  (e: "send", type: SignFormStepTypes, value?: string | number): void;
  (e: "navigate", type: SignFormStepTypes): void;
  (e: "back"): void;
}>();

const layoutTypeClass = computed<string | undefined>(() => {
  if (props.layoutType === LayoutType.Web) {
    return "web";
  } else if (props.layoutType === LayoutType.Tablet) {
    return "tablet";
  } else if (props.layoutType === LayoutType.Mobile) {
    return "mobile";
  } else {
    return undefined;
  }
});

const emailValue = ref<string>("example@example.com");
const passwordValue = ref<string>("pass1234");
const verifyNumberValue = ref<string>("");
const { isValidEmailValue, isValidPasswordValue, isValidVerifyNumberValue } =
  useValidateInputValue({
    email: emailValue,
    password: passwordValue,
    verifyNumber: verifyNumberValue,
  });

const current = computed(() => {
  switch (props.currentStep) {
    case SignFormStepType.EMAIL: {
      return {
        valid: isValidEmailValue.value,
        value: emailValue.value,
        buttonText: "시작하기",
      };
    }
    case SignFormStepType.REQUEST_EMAIL_VERIFY: {
      return {
        valid: false,
        value: undefined,
        buttonText: "인증번호 전송",
      };
    }
    case SignFormStepType.CHECK_EMAIL_NUMBER: {
      return {
        valid: isValidVerifyNumberValue.value,
        value: verifyNumberValue.value,
        buttonText: "인증하기",
      };
    }
    case SignFormStepType.PASSWORD: {
      return {
        valid: isValidPasswordValue.value,
        value: passwordValue.value,
        buttonText: "로그인",
      };
    }
    default: {
      return {
        valid: false,
        value: undefined,
        buttonText: "",
      };
    }
  }
});

const sendFormData = (type: SignFormStepTypes, value?: string | number) => {
  emits("send", type, value);
};
</script>

<style scoped lang="scss">
.sign-container {
  min-width: 480px;
  height: 100%;
  border-radius: var(--cp-number-16);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .top-text {
    margin-top: 50px;
    &__title {
      color: var(--cp-color-black);
    }

    &__description {
      margin-top: var(--cp-number-4);
      margin-bottom: var(--cp-number-12);
      color: var(--cp-color-gray-500);
    }
  }

  .input-form {
    margin-top: 60px;
  }

  .button {
    margin-top: auto;
  }

  .resend-btn {
    margin-top: var(--cp-number-12);
    display: flex;
    justify-content: flex-end;
  }
  .resend-btn > .el-button {
    border: none;
  }
}

.web .top-text,
.web .top,
.tablet .top,
.tablet .top-text {
  // button or input width
  width: 327px;
}
.mobile {
  .top,
  .top-text,
  .input-form,
  .button {
    margin-right: auto;
  }
}

.password {
  & ::v-deep(.el-input__wrapper svg) {
    color: var(--cp-color-red);
  }
  & ::v-deep(.el-input__password) {
    width: 25px;
    height: 20px;

    & svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
