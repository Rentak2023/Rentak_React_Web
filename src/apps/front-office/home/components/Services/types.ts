import React from "react";

export type ServiceType = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string
}

export type ServicesType = {
  services: ServiceType[]
} 