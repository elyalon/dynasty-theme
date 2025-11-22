import { Exists } from "./utils";

const LS_VALIDATE_LICENSE_KEY_URL =
  "https://api.lemonsqueezy.com/v1/licenses/validate";
const LS_ACTIVATE_LICENSE_KEY_URL =
  "https://api.lemonsqueezy.com/v1/licenses/activate";
const LS_STORE_ID = 237013;
const LS_PRODUCT_ID = 695242;

export async function activateLicenseKey(licenseKey: string) {
  const resp = await fetch(LS_ACTIVATE_LICENSE_KEY_URL, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "accept": "application/json",
    },
    body: new URLSearchParams({
      license_key: licenseKey,
      instance_name: "vscode-extension",
    }),
  }).then((resp) => resp.json());

  if (Exists(resp.error)) {
    throw new Error(`Lemon Squeezy activation error: ${resp.error}`);
  }

  if (resp.meta.store_id !== LS_STORE_ID) {
    throw new Error(
      "The provided license key does not belong to the Dynasty Theme store."
    );
  }

  if (resp.meta.product_id !== LS_PRODUCT_ID) {
    throw new Error(
      "The provided license key does not belong to the Dynasty Theme product."
    );
  }

  return {
    instanceId: resp.instance.id,
    customer_name: resp.meta.customer_name,
    customer_email: resp.meta.customer_email,
  };
}

export async function validateLicenseKey(licenseKey: string) {
  const resp = await fetch(LS_VALIDATE_LICENSE_KEY_URL, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "accept": "application/json",
    },
    body: new URLSearchParams({
      license_key: licenseKey,
    }),
  }).then((res) => res.json());

  if (Exists(resp.error)) {
    throw new Error(`Lemon Squeezy validation error: ${resp.error}`);
  }

  if (resp.meta.store_id !== LS_STORE_ID) {
    throw new Error(
      "The provided license key does not belong to the Dynasty Theme store."
    );
  }

  if (resp.meta.product_id !== LS_PRODUCT_ID) {
    throw new Error(
      "The provided license key does not belong to the Dynasty Theme product."
    );
  }

  if (resp.license_key.status !== "active") {
    throw new Error(
      `The provided license key is not active (\`license_key.status\` is "${resp.license_key.status}").`
    );
  }

  return {
    customer_name: resp.meta.customer_name,
    customer_email: resp.meta.customer_email,
  };
}
