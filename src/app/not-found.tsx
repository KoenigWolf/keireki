import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold gradient-text mb-4">404</p>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          ページが見つかりません
        </h2>
        <p className="text-muted-foreground mb-6">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground bg-primary hover:bg-primary-dark transition-colors"
        >
          トップへ戻る
        </Link>
      </div>
    </div>
  );
}
