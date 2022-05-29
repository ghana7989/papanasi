import { useMetadata } from '@builder.io/mitosis';
import { Dynamic, Intent, Variant } from '../../models';
import './pill.css';

export type PillProps = {
  variant?: Dynamic<Variant>;
  intent?: Dynamic<Intent>;
  disabled?: boolean;
  children?: any; // TODO change
};

useMetadata({ isAttachedToShadowDom: true });

export default function Pill(props: PillProps) {
  return (
    <span
      class={
        'pa-pill' +
        (props.variant ? ' pa-pill--' + props.variant : '') +
        (props.intent ? ' is-' + props.intent : '') +
        (props.disabled ? ' is-disabled' : '')
      }
    >
      {props.children}
    </span>
  );
}
