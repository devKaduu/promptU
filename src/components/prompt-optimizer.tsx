"use client";

import { useState } from "react";
import { Sparkles, Copy, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { GenAi } from "@/service/api/gemini";

export type OptimizationStyle = "creative" | "precise" | "technical" | "random";

export default function PromptOptimizer() {
  const [originalPrompt, setOriginalPrompt] = useState("");
  const [optimizedPrompt, setOptimizedPrompt] = useState("");
  const [improvements, setImprovements] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("optimized");
  const [optimizationStyle, setOptimizationStyle] = useState<OptimizationStyle>("random");

  async function handleOptimize() {
    if (!originalPrompt.trim()) return;

    setIsOptimizing(true);
    try {
      const result = await GenAi(originalPrompt, optimizationStyle);

      if (!result.text) return;

      setOptimizedPrompt(result.text);
      setImprovements([result.text]);
    } catch (error) {
      console.error("Error optimizing prompt:", error);
    } finally {
      setIsOptimizing(false);
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(optimizedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <Card className="rounded">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Seu prompt original</h3>
              <Badge variant="outline" className="text-xs">
                Etapa 1
              </Badge>
            </div>
            <Textarea
              placeholder="Digite seu prompt aqui..."
              className="min-h-[150px] resize-none"
              value={originalPrompt}
              onChange={(e) => setOriginalPrompt(e.target.value)}
            />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium">Estilo de otimização</h4>
                </div>
                <Badge variant="outline" className="text-xs">
                  Etapa 2
                </Badge>
              </div>

              <RadioGroup
                value={optimizationStyle}
                onValueChange={(value) => setOptimizationStyle(value as OptimizationStyle)}
                className="grid grid-cols-2 gap-2 min-sm:grid-cols-4"
              >
                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="creative" id="creative" />
                  <Label htmlFor="creative" className="cursor-pointer font-medium">
                    Criativo 😝
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="precise" id="precise" />
                  <Label htmlFor="precise" className="cursor-pointer font-medium">
                    Preciso 🎯
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="technical" id="technical" />
                  <Label htmlFor="technical" className="cursor-pointer font-medium">
                    Técnico 🧠
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="random" id="random" />
                  <Label htmlFor="random" className="cursor-pointer font-medium">
                    Aleatório 🎲
                  </Label>
                </div>
              </RadioGroup>

              <div className="text-sm text-muted-foreground">
                {optimizationStyle === "creative" && "Otimiza para respostas mais imaginativas e originais."}
                {optimizationStyle === "precise" && "Otimiza para obter informações exatas e diretas."}
                {optimizationStyle === "technical" && "Otimiza para informações técnicas detalhadas e dados específicos."}
                {optimizationStyle === "random" && "Deixa o prompt me levar, sem restrições de estilo. Cada otimização é uma surpresa!"}
              </div>
            </div>

            <Button onClick={handleOptimize} disabled={!originalPrompt.trim() || isOptimizing} className="w-full gap-2">
              {isOptimizing ? (
                "Potencializando seu prompt..."
              ) : (
                <>
                  <Sparkles className="h-4 w-4" /> Otimizar prompt
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {optimizedPrompt && (
        <Card className="">
          <CardContent className="pt-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Resultado aprimorado</h3>
                <TabsList>
                  <TabsTrigger value="optimized">Otimizado</TabsTrigger>
                  <TabsTrigger value="improvements">
                    Melhorias{" "}
                    <Badge variant="secondary" className="ml-1">
                      {improvements.length}
                    </Badge>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="optimized" className="space-y-4">
                <div className="relative">
                  <Textarea readOnly value={optimizedPrompt} className="min-h-[150px] resize-none pr-12" />
                  <Button size="icon" variant="ghost" className="absolute top-3 right-3" onClick={copyToClipboard}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary" className="capitalize">
                    Estilo da Otimização: {optimizationStyle}
                  </Badge>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Info className="h-3.5 w-3.5" />
                          Por que ficou melhor?
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-sm">
                        <p>Clique na guia &quot;Improvements&quot; para ver quais alterações foram feitas e por que elas melhoram seu prompt.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TabsContent>

              <TabsContent value="improvements">
                <div className="space-y-3 max-h-[300px] overflow-y-auto p-1">
                  {improvements.map((improvement, index) => (
                    <div key={index} className="p-3 border rounded-md bg-muted/50">
                      <p>{improvement}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
