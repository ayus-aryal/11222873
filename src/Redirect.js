import { useEffect } from 'react';
import { getFromStorage } from './utils';

export default function Redirect({ shortId }) {
  useEffect(() => {
    const longUrl = getFromStorage(shortId);
    if (longUrl) {
      window.location.href = longUrl;
    } else {
      alert('URL not found!');
    }
  }, [shortId]);

  return <p>Redirecting...</p>;
}
