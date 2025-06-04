interface NotificationProps {
  text: string;
}

export function Notification({ text }: NotificationProps) {
  return (
    <span className="block bg-yellow-dark text-black-medium font-semibold py-2 px-5 lg:py-3 rounded-full">
      {text}
    </span>
  );
}
