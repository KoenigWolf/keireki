"use client";

// 共通アイコン（react-icons Heroicons / Simple Icons）
// 視認性・人間フレンドリーを優先した高品質なアイコンを一元管理

import {
  HiOutlineDocumentArrowDown,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineCheckCircle,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineCodeBracketSquare,
  HiOutlineCamera,
  HiOutlineBuildingStorefront,
  HiOutlineDocumentText,
  HiOutlineBriefcase,
  HiOutlineBuildingOffice2,
  HiOutlineCpuChip,
} from "react-icons/hi2";
import { SiGithub } from "react-icons/si";

const iconClass = "shrink-0";

export function IconDownload({
  className = "w-5 h-5",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return (
    <HiOutlineDocumentArrowDown
      className={`${iconClass} ${className}`}
      strokeWidth={1.5}
      {...props}
    />
  );
}

export function IconMail({
  className = "w-5 h-5",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return (
    <HiOutlineEnvelope
      className={`${iconClass} ${className}`}
      strokeWidth={1.5}
      {...props}
    />
  );
}

export function IconMapPin({
  className = "w-4 h-4",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return (
    <HiOutlineMapPin
      className={`${iconClass} ${className} text-primary`}
      strokeWidth={1.5}
      {...props}
    />
  );
}

export function IconUser({
  className = "w-3.5 h-3.5",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return (
    <HiOutlineUser
      className={`${iconClass} ${className} text-primary`}
      strokeWidth={2}
      {...props}
    />
  );
}

export function IconUserGroup({
  className = "w-3.5 h-3.5",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return (
    <HiOutlineUserGroup
      className={`${iconClass} ${className} text-primary`}
      strokeWidth={2}
      {...props}
    />
  );
}

export function IconCheck({
  className = "w-3.5 h-3.5",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return (
    <HiOutlineCheckCircle
      className={`${iconClass} ${className}`}
      strokeWidth={2}
      {...props}
    />
  );
}

export function IconExternalLink({
  className = "w-3.5 h-3.5",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return (
    <HiOutlineArrowTopRightOnSquare
      className={`${iconClass} ${className}`}
      strokeWidth={2}
      {...props}
    />
  );
}

export function IconCode({
  className = "w-7 h-7",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return (
    <HiOutlineCodeBracketSquare
      className={`${iconClass} ${className} text-primary`}
      strokeWidth={1.5}
      {...props}
    />
  );
}

export function IconCamera({
  className = "w-6 h-6",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return (
    <HiOutlineCamera
      className={`${iconClass} ${className} text-primary`}
      strokeWidth={1.5}
      {...props}
    />
  );
}

export function IconStore({
  className = "w-6 h-6",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return (
    <HiOutlineBuildingStorefront
      className={`${iconClass} ${className} text-primary`}
      strokeWidth={1.5}
      {...props}
    />
  );
}

export function IconDocument({
  className = "w-6 h-6",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return (
    <HiOutlineDocumentText
      className={`${iconClass} ${className} text-primary`}
      strokeWidth={1.5}
      {...props}
    />
  );
}

export function IconBriefcase({
  className = "w-6 h-6",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return (
    <HiOutlineBriefcase
      className={`${iconClass} ${className} text-primary`}
      strokeWidth={1.5}
      {...props}
    />
  );
}

export function IconBuildingOffice({
  className = "w-5 h-5",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return (
    <HiOutlineBuildingOffice2
      className={`${iconClass} ${className} text-primary`}
      strokeWidth={1.5}
      {...props}
    />
  );
}

export function IconCpuChip({
  className = "w-5 h-5",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return (
    <HiOutlineCpuChip
      className={`${iconClass} ${className} text-primary`}
      strokeWidth={1.5}
      {...props}
    />
  );
}

export function IconGithub({
  className = "w-5 h-5",
  ...props
}: { className?: string } & React.SVGAttributes<SVGElement>) {
  return <SiGithub className={`${iconClass} ${className}`} {...props} />;
}

// Hero ハイライト用（実務経験・業界・技術の順）
export const highlightIcons = [
  IconBriefcase,
  IconBuildingOffice,
  IconCpuChip,
] as const;

// Stories 用: icon キー → コンポーネント
export const storyIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  camera: IconCamera,
  store: IconStore,
};
