/*
 * Copyright 2020 - MATTR Limited
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  exampleBls12381KeyPair,
  testRevealDocument,
  testSignedDocument,
  customLoader,
  testSignedVcDocument,
  testRevealVcDocument
} from "./__fixtures__";

import {
  Bls12381G2KeyPair,
  BbsBlsSignatureProof2020,
  deriveProof
} from "../src/index";

const key = new Bls12381G2KeyPair(exampleBls12381KeyPair);

describe("BbsBlsSignatureProof2020", () => {
  it("should derive proof", async () => {
    jest.setTimeout(30000);
    const result = await deriveProof(testSignedDocument, testRevealDocument, {
      suite: new BbsBlsSignatureProof2020({ useNativeCanonize: false, key }),
      documentLoader: customLoader,
      compactProof: false
    });
    expect(result).toBeDefined();
  });

  it("should derive proof revealing all statements", async () => {
    jest.setTimeout(30000);
    const result = await deriveProof(testSignedDocument, testRevealDocument, {
      suite: new BbsBlsSignatureProof2020({ useNativeCanonize: false, key }),
      documentLoader: customLoader,
      compactProof: false
    });
    expect(result).toBeDefined();
  });

  it("should derive proof from vc", async () => {
    jest.setTimeout(30000);
    const result = await deriveProof(
      testSignedVcDocument,
      testRevealVcDocument,
      {
        suite: new BbsBlsSignatureProof2020({ useNativeCanonize: false, key }),
        documentLoader: customLoader,
        compactProof: false
      }
    );
    expect(result).toBeDefined();
  });
});
