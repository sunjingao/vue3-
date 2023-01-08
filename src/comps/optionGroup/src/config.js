import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-option-group`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  label: {
    required: true,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
