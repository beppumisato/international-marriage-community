type Props = {
  label: string;
  colorType: 'primary' | 'secondary' | 'error';
};

export default function CommonButton(props: Props) {
  let color = '';

  if (props.colorType == 'primary') {
    color = ' bg-blue-400 hover:bg-blue-600 ';
  } else if (props.colorType == 'secondary') {
    color = ' bg-gray-400 hover:bg-gray-600 ';
  } else {
    color = ' bg-red-400 hover:bg-red-600 ';
  }

  return (
    <button className={`button rounded-full ${color}`} type='submit'>
      {props.label}
    </button>
  );
}
