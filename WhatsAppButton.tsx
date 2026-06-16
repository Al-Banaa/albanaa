import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const WHATSAPP_NUMBER = '447930070707';
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I'd like to get a free quote for my project.");

function getWhatsAppUrl() {
  const base = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  // On iOS/Android, prefer the native app deep link
  if (typeof navigator !== 'undefined') {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(ua)) {
      return `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${WHATSAPP_MESSAGE}`;
    }
    if (/Android/i.test(ua)) {
      return `intent://send?phone=${WHATSAPP_NUMBER}&text=${WHATSAPP_MESSAGE}#Intent;scheme=whatsapp;package=com.whatsapp;end`;
    }
  }
  return base;
}

export default function WhatsAppButton() {
  const [dismissed, setDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`);

  useEffect(() => {
    const ua = navigator.userAgent;
    const mobile = /iPhone|iPad|iPod|Android/i.test(ua);
    setIsMobile(mobile);
    setWhatsappUrl(getWhatsAppUrl());
  }, []);

  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-end gap-2"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <a
        href={whatsappUrl}
        target={isMobile ? '_self' : '_blank'}
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-white rounded-2xl shadow-xl border border-gray-100 px-3 py-2.5 sm:px-4 sm:py-3 hover:shadow-2xl active:scale-95 transition-all duration-200 hover:-translate-y-0.5 select-none touch-manipulation"
        aria-label="Chat on WhatsApp"
      >
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#25D366]/30 group-hover:scale-105 transition-transform duration-200">
          <svg width="21" height="21" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.054 23.447a.75.75 0 0 0 .918.918l5.593-1.478A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.696 9.696 0 0 1-4.964-1.363l-.355-.212-3.683.972.987-3.604-.232-.371A9.698 9.698 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
          </svg>
        </div>
        <div className="min-w-0">
          <div className="text-gray-900 font-semibold text-sm leading-tight whitespace-nowrap">Chat on WhatsApp</div>
          <div className="text-gray-400 text-xs whitespace-nowrap">Typically replies within minutes</div>
        </div>
      </a>

      <button
        onClick={() => setDismissed(true)}
        className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-400 flex items-center justify-center flex-shrink-0 mb-1 transition-colors touch-manipulation"
        aria-label="Dismiss WhatsApp button"
      >
        <X size={12} className="text-gray-600" />
      </button>
    </div>
  );
}
