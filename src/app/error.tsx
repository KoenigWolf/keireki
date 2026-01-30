"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          エラーが発生しました
        </h2>
        <p className="text-muted-foreground mb-6">
          ページの表示中にエラーが発生しました。再読み込みをお試しください。
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground bg-primary hover:bg-primary-dark transition-colors"
        >
          再読み込み
        </button>
      </div>
    </div>
  );
}
