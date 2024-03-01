import { FC } from "react";
import Image from "next/image";
import { formatCreditCardNumber } from "@/utils/formatters";
import masterCardLogo from "../../../../../../public/Mastercard-logo.png";
import visaLogo from "../../../../../../public/Visa_Logo.png";

type OperationMethodType = {
  cardNumber: string;
  operationBrand: string;
};

const OperationMethod: FC<OperationMethodType> = ({
  cardNumber,
  operationBrand,
}) => {
  const operationBrandLogo: Utility.JSONValue = {
    VISA: visaLogo,
    MASTERCARD: masterCardLogo,
  };

  return (
    <span className="operationMethodContainer">
      <Image
        className="operationBrandLogo"
        src={operationBrandLogo[operationBrand]}
        alt="Brand"
      ></Image>
      <p>{formatCreditCardNumber(cardNumber)}</p>
    </span>
  );
};

export default OperationMethod;
