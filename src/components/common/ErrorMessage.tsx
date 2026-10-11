import React from 'react';
import { RefreshCw, Home, ShieldAlert, ServerCrash, HelpCircle } from 'lucide-react';
import type { ErrorMessageProps } from '../../types/ProductsType/Product';


export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  status = 400,
  message,
  onRetry,
}) => {
  const getErrorDetails = (statusCode: number | string) => {
    switch (Number(statusCode)) {
      case 404:
        return {
          title: 'الصفحة أو المنتجات غير موجودة',
          desc: message || 'عذراً، لم نستطيع العثور على ما تبحث عنه. قد يكون الرابط غير صحيح أو تم حذف المنتج.',
          icon: <HelpCircle className="w-12 h-12 text-(--color-sale)" />,
        };
      case 401:
      case 403:
        return {
          title: 'غير مصرح لك بالوصول',
          desc: message || 'عذراً، تحتاج إلى تسجيل الدخول أو لا تملك الصلاحيات الكافية لعرض هذه الصفحة.',
          icon: <ShieldAlert className="w-12 h-12 text-(--color-sale)" />,
        };
      case 500:
      case 502:
      case 503:
        default:
        return {
          title: 'حدث خطأ في الخادم (Server Error)',
          desc: message || 'نواجه مشكلة مؤقتة في الاتصال بالخادم. فريق العمل يعمل على حلها، يرجى المحاولة لاحقاً.',
          icon: <ServerCrash className="w-12 h-12 text-(--color-sale)" />,
        };
    }
  };

  const errorInfo = getErrorDetails(status);

  return (
    <div className="w-full min-h-100 flex items-center justify-center p-6">
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border_card)',
        }}
        className="max-w-lg w-full border rounded-3xl p-8 text-center flex flex-col items-center gap-6 shadow-lg relative overflow-hidden"
      >
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-(--color-sale)/5 rounded-full blur-2xl pointer-events-none" />
        <div className="w-20 h-20 rounded-2xl bg-(--bg-primary) border border-(--border_card) flex items-center justify-center shadow-inner">
          {errorInfo.icon}
        </div>
        {status && (
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-(--color-sale)/10 text-(--color-sale) border border-(--color-sale)/20 tracking-wider">
            كود الخطأ: {status}
          </span>
        )}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-(--text-h)">
            {errorInfo.title}
          </h3>
          <p className="text-sm text-(--text-normal) leading-relaxed">
            {errorInfo.desc}
          </p>
        </div>
        <div className="flex items-center gap-3 w-full pt-2">
          {onRetry && (
            <button
              onClick={onRetry}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm bg-(--color-primary) text-(--bg-main) hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
            >
              <RefreshCw className="w-4 h-4" />
              إعادة المحاولة
            </button>
          )}

          <a
            href="/"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm bg-(--bg-primary) text-(--text-h) border border-(--border_card) hover:bg-(--bg-searchinput) transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
            الصفحة الرئيسية
          </a>
        </div>
      </div>
    </div>
  );
};