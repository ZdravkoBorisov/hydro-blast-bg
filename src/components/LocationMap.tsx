export default function LocationMap() {
  return (
    <iframe
      src="https://maps.google.com/maps?q=42.290167,22.675348&z=15&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps - Kyustendil, Bulgaria"
      className="w-full h-full"
    />
  );
}
